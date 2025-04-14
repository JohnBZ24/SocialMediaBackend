import userModel from "../Authentication/Auth.model.js";
import AuthService from "../Authentication/Auth.services.js";

import pkg from "jsonwebtoken";
const { verify } = pkg;
class userService {
  static async findOne(firstName, lastName, email, authHeader) {
    const user = userModel.findOne({ firstName, lastName, email });
    if (!user) {
      return null;
    }
    const payload = this.verifyToken(authHeader);
    /*take payload ._id  from payload */
    return payload;
  }

  static async verifyToken(authHeader) {
    //change name to verify token
    const token = authHeader.split(" ")[1];
    const payload = verify(token, "miniSocialMediaBackend");
    if (!payload) {
      return undefined;
    }
    return payload;
  }
  static async findAll() {
    const users = await userModel.find();
    return users;
  }
  static async deleteUser(userId) {
    const deleteUser = await userModel.deleteOne({ _id: userId });
    return deleteUser;
  }
}
export default userService;
