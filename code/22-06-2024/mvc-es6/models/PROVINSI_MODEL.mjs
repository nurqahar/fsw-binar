class ProvinsiModel {
  constructor() {
    this.items = [];
  }

  getAllProvinsi() {
    return this.items;
  }

  addProvinsi(item) {
    this.items.push(item);
  }
}

export default ProvinsiModel;
