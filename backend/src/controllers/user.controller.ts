import { Request, Response } from "express";
import connection from '../db/connection';
import bcrypt from 'bcrypt';
import  jwt from 'jsonwebtoken';

// Esta es la funcion para validar el email <3
const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


export const addUser = async (req: Request, res: Response) => {

   const { nombre, password, email } = req.body;

//Esto es la validación de email :3
   if (!email || !validateEmail(email)) {
    return res.status(400).json({ msg: 'Email is invalid'});
   }

    const hashedPassword = await bcrypt.hash(password, 10);

connection.query('INSERT INTO usuarios SET ?', { nombre: nombre, password: hashedPassword, email: email }, (err, data) => {

    if(err) {
        console.log(err)
    } else {
        res.json({
            msg:'Add Usuario',
        })
    }
} )
    
}

export const loginUser = (req: Request, res: Response) => {
    
const { nombre, password } = req.body;

connection.query('SELECT * FROM usuarios WHERE nombre = ' + connection.escape(nombre), (err, data) => {
    if(err) {
        console.log(err)
    } else {
       
        if (Array.isArray(data) && data.length > 0) {
            // Existe el usuario en la base de datos
            const userData = data[0];
            if ('password' in userData) {
                const userPassword = userData.password;
                console.log(userPassword);

            // comparar el password
                bcrypt.compare(password, userPassword).then((result) =>{
                    if(result) {
                        // Login exitoso genera el token
                        const token = jwt.sign({
                            nombre: nombre
                        }, process.env.SECRET_KEY!,{
                            expiresIn:'1h'
                        })

                        res.json({
                            token,
                        });
                    } else {
                        // Password incorrecto
                        res.json({
                            msg: 'Contraseña incorrecta',
                        });
                    }
                })

                
            } else {
                // No se encontró la propiedad 'password' en los datos
                res.json({
                    msg: 'Error en los datos del usuario',
                });
            }
        } else {
            // No existe el usuario en la base de datos
            res.json({
                msg: 'No existe el usuario en la base de datos',
            });
        }
        console.log(data);
    }
});

}