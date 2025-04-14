import authService from "./Auth.services.js";
class authController {
  static async register(req, res) {
    try {
      const { email, firstName, lastName, password } = req.body;
      let auth = await authService.register(
        email,
        firstName,
        lastName,
        password
      );
      res.status(200).json({ auth, return: "user created succesfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
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
