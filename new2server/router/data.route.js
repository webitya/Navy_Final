import { Router } from "express";
import { getBanner, updateBanner } from "../controllers/data.controllers.js";
import { isLogin } from "../middleware/isLogin.js";

const router = Router();

router.get('/getBanner', getBanner);
router.post('/updateBanner', isLogin, updateBanner)

export default router