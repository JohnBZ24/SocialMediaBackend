import userService from "./user.Service.js";
import AuthService from "../Authentication/Auth.services.js";
class userController {
  static async findOne(req, res) {
    try {
      const authHeader = req.headers["authorization"];
      const { firstName, lastName, email } = req.body;
      const user = await userService.findOne(
        firstName,
        lastName,
        email,
        authHeader
      );
      res.status(200).json({ user, message: "user found" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async findAll(req, res) {
    try {
      const users = await userService.findAll();
      res.status(200).json({ users, message: " here all the user's" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  static async deleteUser(req, res) {
    try {
      const authHeader = req.headers["authorization"];
      const { _id } = req.body;
      const user = await userService.deleteUser(_id, authHeader);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
export default userController;
