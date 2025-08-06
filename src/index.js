import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import { removeUnVerfiedAccount } from './automation/removeUnVerfiedAccount.js';
import dbConection from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import { errorMiddleware } from './middlewares/error.js';
import likeRoute from './routes/likeRoute.js';
import postRoutes from './routes/postRoutes.js';
import userRouter from './routes/userRoute.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1', likeRoute);

removeUnVerfiedAccount();

app.get('/ping', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConection();
});

app.use(errorMiddleware);
