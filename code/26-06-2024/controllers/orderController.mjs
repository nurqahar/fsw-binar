import OrderModel from "../models/orderModel.mjs";
const orderModel = new OrderModel();

class OrderController {
  getOrder(req, res) {
    const order = orderModel.getAllOrder();
    res.render("orderView", { order });
  }
  addOrder(req, res) {
    orderModel.addOrder(Object.values(req.body));
    res.redirect("/order");
  }
}

export default OrderController;
