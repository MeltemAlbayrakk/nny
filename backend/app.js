import connectDB from './db.js';
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from '../backend/src/routes/authRoutes.js'



dotenv.config();
const app = express();

app.use(express.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST ,PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, x-access-token");
  res.header("Access-Control-Allow-Credentials", "true");


  next();
});

connectDB();

app.use('/auth', authRoutes);

app.listen(process.env.DB_PORT, () => {
    console.log(`Example app listening on port ${process.env.DB_PORT}`)
  })
