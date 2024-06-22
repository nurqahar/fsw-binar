const provinsi_model = require("../models/provinsiModels");
const fs = require("fs");
const path = require("path");

class Provinsi_Controller {
  get_provinsi(req, res) {
    const provinsi = provinsi_model.get_all_provinsi();
    fs.readFile(
      path.join(__dirname, "../views/provinsiViews.html"),
      "utf-8",
      (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error loading view");
          return;
        }
        const rendered = data.replace(
          "{{provinsi}}",
          provinsi.map((item) => `<li>${item}</li>`)
        );
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(rendered);
      }
    );
  }

  add_provinsi(req, res) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const new_item = new URLSearchParams(body).get("provinsi");
      provinsi_model.add_provinsi(new_item);
      res.writeHead(302, { Location: "/provinsi" });
      res.end();
    });
  }
}

module.exports = new Provinsi_Controller();
