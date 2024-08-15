import { Request, Response } from "express";
import connection from '../db/connection';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface User {
    nombre: string;
    email: string;
    password: string;
    verified: boolean;
}

export const verifyEmail = async (req: Request, res: Response) => {
    const { email, token } = req.query;

    
    if (!email || !token) {
        return res.status(400).json({ msg: 'Faltan el correo electrónico o el token.' });
    }

    
    connection.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ msg: 'Error al buscar el usuario en la base de datos' });
        }

        if (Array.isArray(results) && results.length > 0) {
            const user = results[0] as User;

        
            if (user.verified) {
                return res.status(400).json({ msg: 'El correo electrónico ya ha sido verificado.' });
            }

            
            jwt.verify(token as string, process.env.SECRET_KEY!, (err: any, decoded: any) => {
                if (err) {
                    return res.status(400).json({ msg: 'Token inválido o expirado' });
                }

            
                connection.query('UPDATE usuarios SET verified = 1 WHERE email = ?', [email], (err) => {
                    if (err) {
                        return res.status(500).json({ msg: 'Error al actualizar el estado de verificación' });
                    }

                    res.json({ msg: 'Correo electrónico verificado exitosamente' });
                });
            });
        } else {
            res.status(404).json({ msg: 'Usuario no encontrado' });
        }
    });
};
