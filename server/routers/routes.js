import express from "express"
import PostController from "../controllers/postController.js"

const router =  express.Router()
// Public Routes📢
router.get("/api/allpost",PostController.getPost)
router.post("/api/createNewPost",PostController.createPost)


// PROTECTED ROUTES💀💀


export default router
