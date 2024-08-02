import express from 'express';
import { Request, Response } from 'express';
import { PORT } from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import sequelize from './config/db';
import authRoutes from './routes/authRoutes';
import { authenticateToken } from './middleware/authMiddleware'


const app = express();


sequelize.sync();


app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Prueba<h1/>');
});

app.use('/auth', authRoutes);

app.post('/protected', authenticateToken, (req:Request, res: Response) => {
    res.json({ message: 'Protected route'});
});

app.get('/protected', authenticateToken, (req:Request, res: Response) => {
    res.json({ message: 'Protected route'});
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
