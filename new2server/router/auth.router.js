

import { Router } from "express";
import { getCurrUser, Login, Logout } from "../controllers/auth.controllers.js";
import { isLogin } from "../middleware/isLogin.js";

const router = Router()

router.post('/login', Login);
router.post('/logout', isLogin, Logout)
router.get('/getCurrUser', isLogin, getCurrUser);

export default router;