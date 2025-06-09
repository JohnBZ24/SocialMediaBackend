import sendresponse from "../../util/sendresponse.js";
import authService from "./Auth.services.js";
//import * as authException from "./auth.error.js";
import { signUpUserSchema } from "./user.validation.js";
import { validate } from "../../util/joi/validator.js";

class authController {
  static async register(req, res) {
    try {
      const data = validate(signUpUserSchema, req.body);
      let auth = await authService.register(data);
      return sendresponse(res, { status: 201, message: "created", data: auth });
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      if (password != undefined && email != undefined) {
        let auth = await authService.Login(email, password);
        res.status(200).json({ auth, message: " User found" });
      } else {
        throw new Error(" missing email or password");
      }
    } catch (error) {
      console.error("Error during login", error);
      res.status(400).json({ message: " user not found in the database" });
    }
  }
}
export default authController;
