import userModel from "../Authentication/Auth.model.js";
//import AuthService from "../Authentication/Auth.services.js";

import pkg from "jsonwebtoken";
const { verify } = pkg;
class userService {
  static async findOne(firstName, lastName, email, authHeader) {
    const user = await userModel.findOne({ firstName, lastName, email });
    if (!user) {
      return null;
    }
    const payload = this.verifyToken(authHeader);
    /*take payload ._id  from payload */
    return payload;
  }

  static async verifyToken(authHeader) {
    const token = authHeader.split(" ")[1];
    const payload = verify(token, "miniSocialMediaBackend");
    if (!payload) {
      return undefined;
    }
    return payload;
  }

  static async findAll() {
    return userModel.find();
  }
  // to ask : if we have a valid id and a valid token but not for the same user why it would'nt delete it and how
  static async deleteUser(_id, authHeader) {
    const token = this.verifyToken(authHeader);
    if (!token) {
      return null;
    }
    const deleteUser = await userModel.deleteOne({ _id });
    return deleteUser;
  }
}
export default userService;
