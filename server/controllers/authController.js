import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
class AuthController {
  async signup(req, res) {
    const { email, password, fullName } = req.body;
    if (!email && !password && !fullName) {
      return res.status(400).json({ messsage: "All field required" });
    }
    try {
      const hashPassword = await bcrypt.hash(password, 12);
      const userInDatabase = await userModel.findOne({ email });
      if (userInDatabase) {
        return res.status(400).json({
          messsage: "user allready in DB",
        });
      }
      await userModel.create({email,fullName,password:hashPassword})
      res.status(200).json({
        messsage:"user created successfully"
      })
    } catch (error) {
      res.status(500).json({
        messsage: "Somthing went wrong",
      });
    }
  }  
  async login(req, res) {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({
        messsage: "Please Fill All the field",
      });
    }
    try {
      const userInDataBase = await userModel.findOne({ email });
      if (!userInDataBase) {
        return res.status(404).json({
          messsage: "user not Found",
        });
      }
      const userVailid = bcrypt.compare(password, userInDataBase.password);
      if (!userVailid) {
        return res.status(401).json({ messsage: "User Invaild" });
      }
      const token = jwt.sign(
        { email, id: userInDataBase._id },
        process.env.JWTSEC,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        messsage: "Login successfully",
        token,
        user: userInDataBase,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        messsage: "server error",
      });
    }
  }
}

export default new AuthController();
