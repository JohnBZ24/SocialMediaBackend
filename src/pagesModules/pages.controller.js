import pageService from "./pages.service";
import userService from "../UserModule/user.Service.js";
class pageController {
  static async createPage(req, res) {
    try {
      const { email, password } = req.body;
      let page = await pageService.createPage(email, password);
      res.status(200).json({ page, message: "page created succesfuly" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
  static async findPage(req, res) {
    const { email, password } = req.body;
    const { authHeader } = req.authHeader;

    const page = userService.getUserFromAuthHeader(authHeader);
  }
  static async findAll(req, res) {}
  static async deleteOne(req, res) {}
}
export default pageController;
