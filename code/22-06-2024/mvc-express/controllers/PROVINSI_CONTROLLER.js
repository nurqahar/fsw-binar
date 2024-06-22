const ProvinsiModel = require("../models/PROVINSI_MODEL");
const fs = require("fs");
const path = require("path");
const message = require("../message");

class ProvinsiController {
  getProvinsi(req, res) {
    const provinsi = ProvinsiModel.getAllProvinsi();
    res.render("PROVINSI_VIEW", { provinsi }); //EJS
    // fs.readFile(
    //   path.join(__dirname, "../views/PROVINSI_VIEWS.html"),
    //   "utf-8",
    //   (err, data) => {
    //     if (err) {
    //       res.status(500).send(message.errLoadView());
    //       return;
    //     }
    //     const rendered = data.replace(
    //       "{{provinsi}}",
    //       provinsi.map((item) => `<li>${item}</li>`)
    //     );
    //     res.status(200).send(rendered);
    //   }
    // );
  }

  addProvinsi(req, res) {
    ProvinsiModel.addProvinsi(req.body["provinsi"]);
    res.redirect("/provinsi");
  }
}

module.exports = new ProvinsiController();
