import postMessage from "../models/postMessage.js";
class PostController {
  async getPost(req, res) {
    try {
      const allPost = await postMessage.find();
      res.status(200).json({
        message: "All posts",
        allPost,
      });
    } catch (error) {
      res.status(404).json({
        message: "There Is Error To getting All Post",
      });
    }
  }
  async createPost(req, res) {
    try {
      let { creator, title, tags, message } = req.body;
      if (!title && !message && !creator) {
        return res.status(202).json({
          message: "Title Message And Creator is required",
        });
      } else {
       await postMessage.create(req.body)
        res.status(201).json({
          message: "New post created",
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "Error in creting Post",
      });
    }
  }
}
export default new PostController();
