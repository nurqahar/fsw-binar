import ProvinsiModel from "../models/PROVINSI_MODEL.mjs";
const provinsiModel = new ProvinsiModel();
// import fs from "fs";
// import path from "path";
import Message from "../message.mjs";
const message = new Message();

class ProvinsiController {
  getProvinsi(req, res) {
    const provinsi = provinsiModel.getAllProvinsi();
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
    provinsiModel.addProvinsi(req.body["provinsi"]);
    res.redirect("/provinsi");
  }
}

export default ProvinsiController;
