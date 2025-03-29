import { Router } from "express";
import { register } from "../Apis/auth.js";

export const authRouter = Router();

// Example usage of authRouter
authRouter.post('/register', register);
