import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { getTasks, createTask, toggleTask } from "../controllers/task.controller";

const router = Router();

router.use(authMiddleware);
router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:id/toggle", toggleTask);

export default router;
