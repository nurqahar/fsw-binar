const http = require("http");
const provinsi = [
  {
    id: "1",
    text: "Bali",
  },
  {
    id: "2",
    text: "Bangka Belitung",
  },
  {
    id: "3",
    text: "Banten",
  },
  {
    id: "4",
    text: "Bengkulu",
  },
  {
    id: "5",
    text: "DI Yogyakarta",
  },
  {
    id: "6",
    text: "DKI Jakarta",
  },
  {
    id: "7",
    text: "Gorontalo",
  },
  {
    id: "8",
    text: "Jambi",
  },
  {
    id: "9",
    text: "Jawa Barat",
  },
  {
    id: "10",
    text: "Jawa Tengah",
  },
  {
    id: "11",
    text: "Jawa Timur",
  },
  {
    id: "12",
    text: "Kalimantan Barat",
  },
  {
    id: "13",
    text: "Kalimantan Selatan",
  },
  {
    id: "14",
    text: "Kalimantan Tengah",
  },
  {
    id: "15",
    text: "Kalimantan Timur",
  },
  {
    id: "16",
    text: "Kalimantan Utara",
  },
  {
    id: "17",
    text: "Kepulauan Riau",
  },
  {
    id: "18",
    text: "Lampung",
  },
  {
    id: "19",
    text: "Maluku",
  },
  {
    id: "20",
    text: "Maluku Utara",
  },
  {
    id: "21",
    text: "Nanggroe Aceh Darussalam",
  },
  {
    id: "22",
    text: "Nusa Tenggara Barat",
  },
  {
    id: "23",
    text: "Nusa Tenggara Timur",
  },
  {
    id: "24",
    text: "Papua",
  },
  {
    id: "25",
    text: "Papua Barat",
  },
  {
    id: "26",
    text: "Riau",
  },
  {
    id: "27",
    text: "Sulawesi Barat",
  },
  {
    id: "28",
    text: "Sulawesi Selatan",
  },
  {
    id: "29",
    text: "Sulawesi Tengah",
  },
  {
    id: "30",
    text: "Sulawesi Tenggara",
  },
  {
    id: "31",
    text: "Sulawesi Utara",
  },
  {
    id: "32",
    text: "Sumatera Barat",
  },
  {
    id: "33",
    text: "Sumatera Selatan",
  },
  {
    id: "34",
    text: "Sumatera Utara",
  },
];
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.end("Hello, World\n");
    res.end(JSON.stringify(provinsi));
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const new_data = JSON.parse(body);
      if (new_data && new_data.id && new_data.text) {
        provinsi.push(new_data);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ status: 200, message: "Data added successfully" })
        );
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ status: 400, message: "Invalid data format" })
        );
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    // res.end("Method Not Allowed\n");
    res.end(JSON.stringify(provinsi));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
