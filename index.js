const http = require("http");

const port = 3000;
const appName = "HelloNodeApp";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  let response;

  if (req.url === "/") {
    response = {
      message: `Hello from ${appName}!`,
      time: new Date().toLocaleString(),
      path: req.url,
    };
  } else if (req.url === "/about") {
    response = {
      app: appName,
      version: "1.0.0",
      author: "Your Name",
      description: "A tiny enhanced Hello World app for practicing Git",
    };
  } else {
    response = {
      error: "❌ Route not found",
      available_routes: ["/", "/about"],
    };
  }

  res.end(JSON.stringify(response, null, 2));
});

server.listen(port, () => {
  console.log(`${appName} is running at http://localhost:${port}`);
});
