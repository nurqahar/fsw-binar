class Provinsi_Model {
  constructor() {
    this.items = [];
  }

  get_all_provinsi() {
    return this.items;
  }
  add_provinsi(item) {
    this.items.push(item);
  }
}
module.exports = new Provinsi_Model();
