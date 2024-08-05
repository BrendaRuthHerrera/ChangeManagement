"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const addUser = (req, res) => {
    const { body } = req;
    connection_1.default.query('INSERT INTO usuarios set ?', body, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json({
                msg: 'Add Usuario',
            });
        }
    });
};
exports.addUser = addUser;
