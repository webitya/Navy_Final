import { Router } from "express";
import { sendEmail } from "../controllers/sendEmail.controllers.js";

const router = Router()

router.post('/sendEmail', sendEmail)

export default router