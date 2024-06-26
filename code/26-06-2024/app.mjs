import express from "express";
const app = express();
const port = 3000;
import Message from "./message/message.mjs";
const message = new Message();
import router from "./router.mjs";

app.set("view engine", "ejs"); //to set EJS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(port, () => {
  console.log(message.listenOn(port));
});
