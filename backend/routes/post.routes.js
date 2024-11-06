import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  createPost,
  likeUnlikePost,
  commentPost,
  deletePost,
  getAllPosts,
  getLikedPosts,
  getFollowedPosts,
  getUserPosts
} from "../controllers/post.controller.js";

const router = express.Router();

router
  .get("/all", protectRoute, getAllPosts)
  .get("/following", protectRoute, getFollowedPosts)
  .get("/likes/:id", protectRoute, getLikedPosts)
  .get("/user/:username", protectRoute, getUserPosts)
  .post("/create", protectRoute, createPost)
  .post("/like/:id", protectRoute, likeUnlikePost)
  .post("/comment/:id", protectRoute, commentPost)
  .delete("/:id", protectRoute, deletePost);

export default router;
