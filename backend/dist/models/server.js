import express from 'express';
import connection from '../db/connection';
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.connectDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        });
    }
    connectDB() {
        connection.connect((err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Base de datos conectada exitosamente!!!');
            }
        });
    }
}
export default Server;
//# sourceMappingURL=server.js.map