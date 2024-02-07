import express, { Request, Response , Router } from 'express';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  console.log('in get')
  res.send('Hello from all comments GET')
});

router.post("/", (req: Request, res: Response) => {
  res.send('Hello from all comments POST')
});

export default router;
