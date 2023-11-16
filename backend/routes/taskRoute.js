import express from "express"
import { addTask, getTask, removeTask} from "../controllers/taskController.js"
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/task/addTask", requireAuth, addTask)
router.get("/task/getTask",requireAuth, getTask)
router.get("/task/removeTask",requireAuth, removeTask)

export default router;