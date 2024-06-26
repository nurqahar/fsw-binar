class OrderModel {
  constructor() {
    this.items = [];
  }

  getAllOrder() {
    return this.items;
  }

  addOrder(item) {
    this.items.push(item);
  }
}

export default OrderModel;
