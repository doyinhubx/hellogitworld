const http = require("http");

const port = 3000;
const appName = "HelloNodeApp";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const response = {
    message: `Hello from ${appName}!`,
    time: new Date().toLocaleString(),
    path: req.url,
  };

  res.end(JSON.stringify(response, null, 2));
});

server.listen(port, () => {
  console.log(`${appName} is running at http://localhost:${port}`);
});
