import MenuModel from "../models/menuModel.mjs";
const menuModel = new MenuModel();

class MenuController {
  getMenu(req, res) {
    const menu = menuModel.getAllMenu();
    res.render("menuView", { menu });
  }
}

export default MenuController;
