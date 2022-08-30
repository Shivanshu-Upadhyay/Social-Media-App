import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCostomAuth = token.length < 500;
    let decodeData;
    if (token && isCostomAuth) {
      decodeData = jwt.verify(token, process.env.JWTSEC);
      req.useId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      req.useId = decodeData?.sub;
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: "Authorization not found.",
    });
  }
};

export default authMiddleware;
