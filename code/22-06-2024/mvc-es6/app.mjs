import express from "express";
const app = express();
const port = 3000;
import Message from "./message.mjs";
const message = new Message();
import ProvinsiController from "./controllers/PROVINSI_CONTROLLER.mjs";
const provinsiController = new ProvinsiController();

app.set("view engine", "ejs"); //to set EJS
//tambah middleware agar lebih mudah membaca data yang dikirim dalam bentuk form-data
app.use(express.urlencoded({ extended: true }));
app.get("/provinsi", (req, res) => {
  provinsiController.getProvinsi(req, res);
});
app.post("/provinsi", (req, res) => {
  provinsiController.addProvinsi(req, res);
});

app.listen(port, () => {
  console.log(message.listenOn(port));
});
