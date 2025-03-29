import { Router } from "express";
import { login, register } from "../Apis/auth.js";

export const authRouter = Router();

// Example usage of authRouter
authRouter.post('/register', register);
authRouter.post('/login', login)
