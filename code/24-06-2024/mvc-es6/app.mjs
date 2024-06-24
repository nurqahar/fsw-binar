import express from "express";
const app = express();
const port = 3000;
import Message from "./message.mjs";
const message = new Message();
import router from "./router.mjs";
import morgan from "morgan";

app.set("view engine", "ejs"); //to set EJS
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("errorView", { error: err.message });
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use("/", router);
app.use("./public", express.static("public"));

app.use("/error", (req, res, next) => {
  throw message.sengajaError();
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(message.listenOn(port));
});
