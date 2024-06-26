import express from "express";
import MenuController from "./controllers/menuController.mjs";
const menuController = new MenuController();
import OrderController from "./controllers/orderController.mjs";
const orderController = new OrderController();
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mainView");
});
router.get("/menu", (req, res) => {
  menuController.getMenu(req, res);
});
router.get("/order", (req, res) => {
  orderController.getOrder(req, res);
});
router.post("/order", (req, res) => {
  orderController.addOrder(req, res);
});

export default router;
