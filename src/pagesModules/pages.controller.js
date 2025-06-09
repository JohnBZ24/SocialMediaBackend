import pageService from "./pages.service.js";

class pageController {
  static async createPage(req, res) {
    try {
      const authHeader = req.headers["authorization"];
      const { bio, description } = req.body;

      const page = await pageService.createPage(bio, description, authHeader);

      if (!page) {
        return res
          .status(400)
          .json({ message: "Page creation failed or unauthorized" });
      }

      res.status(201).json({ page, message: "Page created successfully" });
    } catch (error) {
      console.error(" Error in createPage:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async findPage(req, res) {
    try {
      const id = req.params.id;
      const authHeader = req.headers["authorization"];

      const page = await pageService.findOne(id, authHeader);

      if (!page) {
        return res
          .status(404)
          .json({ message: "Page not found or unauthorized" });
      }

      res.status(200).json({ page, message: "Here is the page content" });
    } catch (error) {
      console.error(" Error in findPage:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async findAll(req, res) {}
  static async deleteOne(req, res) {}
}

export default pageController;
