import "dotenv/config";
import pkg from "jsonwebtoken";
const { verify } = pkg;
export default function authencticateJwt(req, res, next) {
  const authheader = req.headers.authorization;
  if (!authheader.startWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: " missing or invalid Authorizayion header" });
  }
  const token = authheader.split(" ")[1];
  try {
    const payload = verify(token, process.env.JWT_SECRET);
    req.users = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired Token" });
  }
}
