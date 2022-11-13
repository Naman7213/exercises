const http = require("http");
const port = 5500 || process.env.PORT;
const app = require("./app");

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
