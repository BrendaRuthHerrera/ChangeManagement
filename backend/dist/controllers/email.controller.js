"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = exports.sendVerificationEmail = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const connection_1 = __importDefault(require("../db/connection"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});
const sendVerificationEmail = (email, token) => {
    const verificationLink = `http://localhost:5173/verify-email?token=${token}`;
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Email Verification',
        text: `Click this link to verify your email: ${verificationLink}`
    };
    console.log("Sending email to:", email);
    console.log("Verification link:", verificationLink);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
        }
        else {
            console.log('Verification email sent: ' + info.response);
        }
    });
};
exports.sendVerificationEmail = sendVerificationEmail;
const verifyEmail = (req, res) => {
    const { token } = req.query;
    if (!token) {
        return res.status(400).json({ msg: 'No token provided' });
    }
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(400).json({ msg: 'Invalid or expired token' });
        }
        const email = decoded.email;
        connection_1.default.query('UPDATE usuarios SET verified = true WHERE email = ?', [email], (err, results) => {
            if (err) {
                return res.status(500).json({ msg: 'Error verifying email' });
            }
            res.json({ msg: 'Email verified successfully' });
        });
    });
};
exports.verifyEmail = verifyEmail;
