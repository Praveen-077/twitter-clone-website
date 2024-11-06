import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getNotifications,deleteNotifications,deleteNotification } from "../controllers/notification.controller.js";

const router = express.Router();

router
  .get("/", protectRoute, getNotifications)
  .delete("/", protectRoute, deleteNotifications)
  .delete("/:id", protectRoute, deleteNotification);

export default router;
