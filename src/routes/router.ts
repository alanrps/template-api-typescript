import express from "express";
import { getAllUser } from "../controllers/user.controller";

export const router = express.Router();

router.get('/users', getAllUser)