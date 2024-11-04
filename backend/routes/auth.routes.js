import express from "express";
import { signup,login,logout,getMe } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me",protectRoute,getMe).post("/signup", signup).post("/login", login).post("/logout", logout);

export default router;
