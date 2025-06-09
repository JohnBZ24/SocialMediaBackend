import pageschema from "./Pages.module.js";
import userService from "../UserModule/user.Service.js";

class pageService {
  static async createPage(bio, description, authHeader) {
    try {
      const token = await userService.verifyToken(authHeader);
      console.log("Decoded token:", token);

      if (!token || !token._id) {
        return null;
      }

      const newPage = await new pageschema({
        userId: token._id,
        bio,
        description,
      }).save();

      return newPage;
    } catch (error) {
      console.error(" Error in createPage:", error.message);
      return null;
    }
  }

  static async findOne(pageId, authHeader) {
    try {
      const token = await userService.verifyToken(authHeader);

      if (!token || !token._id) {
        return null;
      }

      const page = await pageschema.findOne({ _id: pageId, userId: token._id });

      return page;
    } catch (error) {
      console.error(" Error in findOne:", error.message);
      return null;
    }
  }
}

export default pageService;
