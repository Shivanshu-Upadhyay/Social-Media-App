import express from "express"
import PostController from "../controllers/postController.js"
import AuthController from "../controllers/authController.js"
import authMiddleware from "../middleware/authMiddleware.js"

const router =  express.Router()
// Public Routes📢
router.post("/api/signup",AuthController.signup)
router.post("/api/login",AuthController.login)


// PROTECTED ROUTES💀💀
router.get("/api/allpost",authMiddleware, PostController.getPost)
router.post("/api/createNewPost",authMiddleware,PostController.createPost)
router.post("/api/deletePost",authMiddleware,PostController.deletePost)
router.post("/api/updateOnePost",authMiddleware,PostController.updateOnePost)
router.patch("/api/:id/likePost",authMiddleware,PostController.likePost)

export default router
