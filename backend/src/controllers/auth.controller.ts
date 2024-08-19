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

    try {
        // Verificar el token JWT
        const decoded: any = jwt.verify(token as string, process.env.SECRET_KEY!);

        if (decoded.email !== email) {
            return res.status(400).json({ msg: 'Token inválido para este correo electrónico.' });
        }

        // Consultar el usuario en la base de datos
        connection.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
            if (err) {
                console.log('Error al buscar el usuario en la base de datos:', err);
                return res.status(500).json({ msg: 'Error al buscar el usuario en la base de datos' });
            }

            if (Array.isArray(results) && results.length > 0) {
                const user = results[0] as User;

                // Verificar si el usuario ya está verificado
                if (user.verified) {
                    console.log("El correo electrónico ya ha sido verificado:", email);
                    return res.status(400).json({ msg: 'El correo electrónico ya ha sido verificado.' });
                }

                // Actualizar el estado de verificación del usuario
                connection.query('UPDATE usuarios SET verified = 1 WHERE email = ?', [email], (err, updateResults) => {
                    if (err) {
                        console.log('Error al actualizar el estado de verificación:', err);
                        return res.status(500).json({ msg: 'Error al actualizar el estado de verificación' });
                    } else {
                        console.log('Usuario no encontrado:', email);
                        return res.status(404).json({ msg: 'Usuario no encontrado' });
                    }
                });
            } else {
                console.log('Usuario no encontrado:', email);
                return res.status(404).json({ msg: 'Usuario no encontrado' });
            }
        });
    } catch (err) {
        console.log('Error al verificar el token:', err);
        return res.status(400).json({ msg: 'Token inválido o expirado' });
    }
};
