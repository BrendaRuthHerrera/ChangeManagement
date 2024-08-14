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
exports.loginUser = exports.addUser = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mailer_1 = require("../utils/mailer");
// Esta es la funcion para validar el email <3
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, password, email } = req.body;
    console.log("Received registration data:", { nombre, password, email });
    //Esto es la validación de email :3
    if (!email || !validateEmail(email)) {
        console.log("Invalid email:", email);
        return res.status(400).json({ msg: 'Email is invalid' });
    }
    connection_1.default.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log("Error querying email:", err);
            return res.status(500).json({ msg: 'Error al verificar el correo electrónico' });
        }
        if (Array.isArray(results) && results.length > 0) {
            console.log("Email already registered:", email);
            return res.status(400).json({ msg: 'El correo electronicó ya esta registrado' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        console.log("Hashed password:", hashedPassword);
        connection_1.default.query('INSERT INTO usuarios SET ?', { nombre: nombre, password: hashedPassword, email: email }, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                console.log("Error inserting user:", err);
                return res.status(500).json({ msg: 'Error al registrar el usuario' });
            }
            else {
                const verificationLink = `http://localhost:3000/verify-email?email=${email}&token=${hashedPassword}`;
                yield (0, mailer_1.sendEmail)(email, 'Verifica tu correo electrónico', `
            <h1>Hola, ${nombre}!</h1>
            <p>Por favor verifica tu correo electrónico haciendo clic en el siguiente enlace:</p>
            <a href="${verificationLink}">Verificar correo</a>
        `);
                res.status(201).json({
                    success: true,
                    msg: 'Usuario registrado exitosamente'
                });
            }
        }));
    }));
});
exports.addUser = addUser;
const loginUser = (req, res) => {
    const { email, password } = req.body;
    console.log("Received login data:", { email, password });
    connection_1.default.query('SELECT * FROM usuarios WHERE email = ?' + connection_1.default.escape(email), (err, data) => {
        if (err) {
            console.log("Error querying email:", err);
        }
        else {
            if (Array.isArray(data) && data.length > 0) {
                // Existe el usuario en la base de datos
                const userData = data[0];
                if ('password' in userData) {
                    const userPassword = userData.password;
                    console.log(userPassword);
                    // comparar el password
                    bcrypt_1.default.compare(password, userPassword).then((result) => {
                        if (result) {
                            // Login exitoso genera el token
                            const token = jsonwebtoken_1.default.sign({
                                email: email
                            }, process.env.SECRET_KEY, {
                                expiresIn: '1h'
                            });
                            res.json({
                                token,
                            });
                        }
                        else {
                            // Password incorrecto
                            res.json({
                                msg: 'Contraseña incorrecta',
                            });
                        }
                    });
                }
                else {
                    // No se encontró la propiedad 'password' en los datos
                    res.json({
                        msg: 'Error en los datos del usuario',
                    });
                }
            }
            else {
                // No existe el usuario en la base de datos
                res.json({
                    msg: 'No existe el usuario en la base de datos',
                });
            }
            console.log(data);
        }
    });
};
exports.loginUser = loginUser;
