import { Request, Response } from "express";
import connection from '../db/connection';
import bcrypt from 'bcrypt';
import  jwt from 'jsonwebtoken';
import { sendEmail } from "../utils/mailer";
import dotenv from 'dotenv';
dotenv.config();



const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


export const addUser = async (req: Request, res: Response) => {
   const { nombre, password, email } = req.body;
   console.log("Received registration data:", { nombre, password, email });


   if (!email || !validateEmail(email)) {
    console.log("Invalid email:", email);
    return res.status(400).json({ msg: 'Email is invalid'});
   }

connection.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
    if (err) {
       console.log("Error querying email:", err);
       return res.status(500).json({ msg: 'Error al verificar el correo electrónico' });
    }

    if (Array.isArray(results) && results.length > 0) {
        console.log("Email already registered:", email);
        return res.status(400).json({ msg: 'El correo electronicó ya esta registrado' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);  
    console.log("Hashed password:", hashedPassword);

    const verificationToken = jwt.sign({ email }, process.env.SECRET_KEY!, { expiresIn: '1h' });

connection.query('INSERT INTO usuarios SET ?', { nombre: nombre, password: hashedPassword, email: email }, async (err, data) => {

    if(err) {
        console.log("Error inserting user:", err);
        return res.status(500).json({ msg: 'Error al registrar el usuario' });
    } else {
        const verificationLink = `http://localhost:5173/verify-email?email=${email}&token=${verificationToken}`; 
        await sendEmail(email, 'Verifica tu correo electrónico', `
            <h1>Hola, ${nombre}!</h1>
            <p>Por favor verifica tu correo electrónico haciendo clic en el siguiente enlace:</p>
            <a href="${verificationLink}">Verificar correo</a>
        `);
        res.status(201).json({
            success: true,
            msg:'Usuario registrado exitosamente'
        });
    }
});

});

};

export const loginUser = (req: Request, res: Response) => {
    
const { email, password } = req.body;
console.log("Received login data:", { email, password });

connection.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, data) => {

    if(err) {
        console.log("Error querying email:", err);
    } else {
       
        if (Array.isArray(data) && data.length > 0) {
            const userData = data[0];
            if ('password' in userData) {
                const userPassword = userData.password;
                
                if (!userData.verified) {
                    return res.status(400).json({ msg: 'Correo electrónico no verificado. Por favor, verifica tu correo.' });
                }
            
                bcrypt.compare(password, userPassword).then((result) =>{
                    if(result) {
                    
                        const token = jwt.sign({
                            email: email
                        }, process.env.SECRET_KEY!,{
                            expiresIn:'1h'
                        })

                        console.log('se recibe dato', token);
                        res.json({
                            token,
                        });
                    } else {
                    
                        res.json({
                            msg: 'Contraseña incorrecta',
                        });
                    }
                })

                
            } else {
                
                res.status(400).json({
                    msg: 'Error en los datos del usuario',
                });
            }
        } else {
        
            res.status(404).json({
                msg: 'No existe el usuario en la base de datos',
            });
        }
        console.log(data);
    }
});

}