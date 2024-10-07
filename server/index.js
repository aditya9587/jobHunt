import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config();

import { router } from './src/routes/userRoutes.js';
import { jobrouter } from './src/routes/jobRoutes.js';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("DATABASE IS CONNECTED")
})

app.use("/api/v1/user", router)
app.use("/api/v1/job", jobrouter)

app.listen(process.env.PORT, ()=>{
  console.log("Server is stated")
})