import connectDB from './db.js';
import dotenv from 'dotenv';
import express from 'express';




dotenv.config();
const app = express();

app.use(express.json())

connectDB();

app.listen(process.env.DB_PORT, () => {
    console.log(`Example app listening on port ${process.env.DB_PORT}`)
  })
