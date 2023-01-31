import dotenv from 'dotenv';
import {models} from './models/models'
import sequelize from './db/connection'
dotenv.config();
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { router } from './routes';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const httpServer = createServer(app);

const PORT = process.env.PORT || process.env.API_PORT;


httpServer.listen({ port: PORT }, async () => {
  models;
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
  console.log(`httpServer ready at http://localhost:${PORT}`);
});
