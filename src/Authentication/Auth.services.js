import AuthModel from "./Auth.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import AppError from "../../util/error/appError.js";
import * as authException from "./auth.error.js";

//import * as SendResponse from "../../util/sendresponse.js";
//import {signUpUserSchema} from "./user.validation.js";
dotenv.config();
const { hash, compare } = bcrypt;
import pkg from "jsonwebtoken";
const { sign } = pkg;
const { verify } = pkg;
class authService {
  static async register(reqBody) {
    const hashedPass = await hash(reqBody.password, 12);
    await new AuthModel({
      email: reqBody.email,
      firstName: reqBody.firstName,
      lastName: reqBody.lastName,
      password: hashedPass,
    }).save();
    if (await this.findUserByEmail(email)) {
      throw new AppError(
        authException.userAlreadyExist.message,
        authException.userAlreadyExist.statusCode
      );
    }
  }

  static async Login(email, password) {
    const user = await this.findUserByEmail(email);
    const passCheckers = await compare(password, user.email);
    if (!user) {
      throw new Error("user not found");
    }
    if (passCheckers) {
      throw Error("error occured");
    }
    const token = await this.signJwt({ _id: user._id });
    return { token };
  }
  static async findUserByEmail(email) {
    return AuthModel.findOne({ email });
  }
  static async signJwt(userPayload) {
    return sign(userPayload, process.env.JWT_SECRET, { expiresIn: "1y" });
  }
}
export default authService;
