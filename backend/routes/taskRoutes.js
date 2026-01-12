import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getTasks,
  createTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/")
  .get(protect, getTasks)
  .post(protect, createTask);

router.delete("/:id", protect, deleteTask);

export default router;
