"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, token } = req.query;
    if (!email || !token) {
        return res.status(400).json({ msg: 'Faltan el correo electrónico o el token.' });
    }
    connection_1.default.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
        if (err) {
            return res.status(500).json({ msg: 'Error al buscar el usuario en la base de datos' });
        }
        if (Array.isArray(results) && results.length > 0) {
            const user = results[0];
            if (user.verified) {
                return res.status(400).json({ msg: 'El correo electrónico ya ha sido verificado.' });
            }
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(400).json({ msg: 'Token inválido o expirado' });
                }
                connection_1.default.query('UPDATE usuarios SET verified = 1 WHERE email = ?', [email], (err) => {
                    if (err) {
                        return res.status(500).json({ msg: 'Error al actualizar el estado de verificación' });
                    }
                    res.json({ msg: 'Correo electrónico verificado exitosamente' });
                });
            });
        }
        else {
            res.status(404).json({ msg: 'Usuario no encontrado' });
        }
    });
});
exports.verifyEmail = verifyEmail;
