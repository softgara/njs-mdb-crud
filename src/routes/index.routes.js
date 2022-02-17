import { Router } from "express";
/*import Task from "../models/Task";*/

import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/task/:id/toggleDone", taskToggleDone);

router.get("/task/:id/edit", renderTaskEdit);

router.post("/task/:id/edit", editTask);

router.get("/task/:id/delete", deleteTask);

export default router;
