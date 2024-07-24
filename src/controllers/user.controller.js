// Please don't change the pre-written code
// Import the necessary modules here
import { registerUser, authenticateUser } from "../models/user.model.js";
export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    res.render("user-register", { errorMesg: null });
  };
  getLogin = (req, res, next) => {
    // Write your code here
    res.render("user-login");
  };
  addUser = (req, res) => {
    // Write your code here
    let user = registerUser(req.body);
    if (user.success) {
      res.redirect("/login");
    } else {
      res.render("user-register", { errorMesg: user.message });
    }
  };
  loginUser = (req, res) => {
    // Write your code here
    let data = authenticateUser(req.body);
    if (data.success) {
      res.send({ success: true, message: "login successful" });
    } else {
      res.send({ success: false, message: "login failed" });
    }
  };
}
