import express from "express"
import PostController from "../controllers/postController.js"

const router =  express.Router()
// Public Routes📢
router.get("/api/allpost",PostController.getPost)
router.post("/api/createNewPost",PostController.createPost)
router.post("/api/deletePost",PostController.deletePost)
router.post("/api/updateOnePost",PostController.updateOnePost)
router.patch("/api/:id/likePost",PostController.likePost)


// PROTECTED ROUTES💀💀


export default router
