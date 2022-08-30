import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from "./routers/routes.js";
import DbConnect from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// Cookie Parser
app.use(cookieParser());
// cors error
const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));
const PORT = process.env.PORT || 5001;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(router);
DbConnect();
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT + "✅");
});
