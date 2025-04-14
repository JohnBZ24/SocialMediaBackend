import pageModel from "./Pages.module.js";
import userService from "../UserModule/user.Service.js";
class pageService{
  static async createPage(email,password){
   let checkuser=  authService.Login(email,password);
   if(checkuser){
        await new pageModel({
          password,
          email
        }).save();
   }
  }
  static async findOne()

}
export default pageService