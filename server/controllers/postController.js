import mongoose from "mongoose";
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
        await postMessage.create(req.body);
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
  async deletePost(req, res) {
    try {
      const _id = req.body;
      if (!_id) {
        return res.status(401).json({
          message: "Error No Id",
        });
      }
      await postMessage.deleteOne({ _id: _id });
      res.status(200).json({
        message: "Delete Successfully✅",
      });
    } catch (error) {
      res.status(400).json({
        message: "Error while Deleting",
      });
    }
  }

  async updateOnePost(req, res) {
    try {
      const { _id, creator, title, tags, selectedFile, message } = req.body;
      if (!_id) {
        return res.status(404).json({
          message: "No Id Provided",
        });
      } else if ((creator, title)) {
        const result = await postMessage.findByIdAndUpdate(_id,{creator,title,tags,selectedFile,message},{new:true})
        res.status(200).json({
          message:"Update successfully✅"
        })
      } else {
        const onePostVal = await postMessage.findById(_id);
        return res.status(200).json({
          onePostVal,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: "update Post server error",
      });
    }
  }
  async likePost(req,res){
    const {id} = req.params
    if(!req.userId){
      return res.status(404).json({message:"auth not found"})
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(400).json({
        message:"No Id Found"
      })
    }
    const post = await postMessage.findById(id)
    await postMessage.findByIdAndUpdate(id,{likeCount:Number(post.likeCount)+1},{new:true})
    res.status(200).json({
      message:"Like Updated"
    })
  }
}
export default new PostController();
