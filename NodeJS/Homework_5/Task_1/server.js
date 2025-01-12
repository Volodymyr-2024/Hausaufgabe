import http from "http";

const server = http.createServer((req, res) => {
  const authHeader = req.headers["authorization"];
  res.setHeader("Content-Type", "text/plain");
  
  if (authHeader) {
    res.statusCode = 200;
    res.end("Authorization header received");
  } else {
    res.statusCode = 401;
    res.end("Unauthorized");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
