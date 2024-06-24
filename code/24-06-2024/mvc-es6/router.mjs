import express from "express";
import ProvinsiController from "./controllers/PROVINSI_CONTROLLER.mjs";
const provinsiController = new ProvinsiController();
const router = express.Router();
import url from "url";
// error trial
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  if (res.statusCode == 404) {
    res.status(404).render("randomUrl", { error: err.message });
  } else if (res.statusCode == 500) {
    res.status(500).render("errorView", { error: err.message });
  }
};

const loggerRouter = (req, res, next) => {
  console.log(`LOGGER ROUTER: ${req.url} ${req.method} : ${Date.now()}`);
  next();
};

router.use(loggerRouter);
router.get("/provinsi", (req, res) => {
  provinsiController.getProvinsi(req, res);
});
router.post("/provinsi", (req, res) => {
  provinsiController.addProvinsi(req, res);
});

// error trial
router.use("/", (req, res, next) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname == "/error") {
    res.status(500);
  } else if (parsedUrl.pathname != "/") {
    res.status(404);
  }
  throw message.sengajaError();
});
router.use(errorMiddleware);

export default router;
