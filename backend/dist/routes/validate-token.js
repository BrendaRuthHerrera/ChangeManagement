"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    console.log(headerToken);
    if (typeof headerToken === 'string' && headerToken.startsWith('Bearer ')) {
        // Tiene token 
        const bearerToken = headerToken.split(" ")[1];
        try {
            const tokenValid = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY);
            console.log(tokenValid);
            next();
        }
        catch (error) {
            res.status(400).json({
                error: 'token no valido'
            });
        }
    }
    else {
        res.status(400).json({
            error: 'Acceso denegado'
        });
    }
};
exports.default = validateToken;
