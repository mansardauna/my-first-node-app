const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-Type": "text/html" });
  res.end("<h1>hello server</h1>");
});

server.listen(8080, () => {
  console.log("server is running on http://localhost:8080");
});