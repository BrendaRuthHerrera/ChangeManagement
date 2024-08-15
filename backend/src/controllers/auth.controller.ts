import { Request, Response } from "express";
import connection from '../db/connection';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();



export const verifyEmail = async (req: Request, res: Response) => {
    const { email, token } = req.query;

    connection.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ msg: 'Error al verificar el correo electrónico' });
        }

        if (Array.isArray(results) && results.length > 0) {
            const user = results[0] as { password: string };
            const isValidToken = await bcrypt.compare(token as string, user.password);

            if (isValidToken) {
                connection.query('UPDATE usuarios SET verified = 1 WHERE email = ?', [email], (err) => {
                    if (err) {
                        return res.status(500).json({ msg: 'Error al actualizar el usuario' });
                    }

                    res.json({ msg: 'Correo electrónico verificado exitosamente' });
                });
            } else {
                res.status(400).json({ msg: 'Token inválido' });
            }
        } else {
            res.status(404).json({ msg: 'Usuario no encontrado' });
        }
    });
};
