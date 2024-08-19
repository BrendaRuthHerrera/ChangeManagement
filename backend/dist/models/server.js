"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("../db/connection"));
const link_routes_1 = __importDefault(require("../routes/link.routes"));
const default_routes_1 = __importDefault(require("../routes/default.routes"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_controller_1 = require("../controllers/auth.controller");
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.connectDB();
        this.midlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        });
    }
    connectDB() {
        connection_1.default.connect((err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Base de datos conectada exitosamente!!!');
            }
        });
    }
    routes() {
        this.app.use('/', default_routes_1.default);
        this.app.use('/api/aplicaciones', link_routes_1.default);
        this.app.use('/api/usuarios', user_routes_1.default);
        this.app.use('/api/verify-email', auth_controller_1.verifyEmail);
    }
    midlewares() {
        this.app.use((0, cors_1.default)({
            origin: 'http://localhost:5173',
            credentials: true,
        }));
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
    }
}
exports.default = Server;
