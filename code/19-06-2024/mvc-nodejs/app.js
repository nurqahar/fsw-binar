const http = require("http");
const url = require("url");
const provinsi_controller = require("./controllers/provinsiController");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/provinsi" && req.method === "GET") {
    provinsi_controller.get_provinsi(req, res);
  } else if (parsedUrl.pathname === "/provinsi" && req.method === "POST") {
    provinsi_controller.add_provinsi(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const port = 3000;
server.listen(port, () => {
  // console.log(`Server running at http://127.0.0.1:${port}/provinsi`);
  console.log(`Server running at http://localhost:${port}/provinsi`);
});
