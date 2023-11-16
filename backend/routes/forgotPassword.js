import express from "express"
import { forgotPassword, resetPassword } from "../controllers/forgotPasswordController.js"

const router = express.Router();
router.post("/forgotPassword/forgotPassword", forgotPassword)
router.post("/forgotPassword/resetPassword", resetPassword)

export default router;