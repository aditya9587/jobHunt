import {Router} from 'express'
import { createjob, getAllJob, getJobById, updatejob } from '../controllers/jobController.js';
import { authmiddleware } from '../middleware/AuthMiddleware.js';

export const jobrouter = Router();

jobrouter.post("/create", authmiddleware, createjob);

jobrouter.get("/allJob", getAllJob);

jobrouter.get("/:id",  getJobById);

jobrouter.patch("/editjob/:id", authmiddleware, updatejob);