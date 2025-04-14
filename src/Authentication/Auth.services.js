import AuthModel from "./Auth.model.js";

import pkg from "jsonwebtoken";
const { sign } = pkg;
const { verify } = pkg;
class authService {
  static async register(email, firstName, lastName, password) {
    await new AuthModel({
      email,
      firstName,
      lastName,
      password,
    }).save();
  }

  static async Login(email, password) {
    const user = await this.findUserByEmail(email);
    if (!user) {
      throw new Error("user not found");
    }
    if (password != user.password) {
      throw Error("error occured");
    }
    const token = await this.signJwt({ _id: user._id });
    return { token };
  }
  static async findUserByEmail(email) {
    return AuthModel.findOne({ email });
  }
  static async signJwt(userPayload) {
    return sign(userPayload, "miniSocialMediaBackend", { expiresIn: "1y" });
  }
}
export default authService;
