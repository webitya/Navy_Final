
import { Router } from "express";
import { addFormData, getFormData, getQueryData, updateState } from "../controllers/form.controllers.js";
import { isLogin } from "../middleware/isLogin.js";

const router = Router();

router.post('/setformdata', addFormData)
router.get('/getformdata', isLogin, getFormData)
router.get('/getquerydata', isLogin, getQueryData)
router.post('/updateState', isLogin, updateState)

export default router;