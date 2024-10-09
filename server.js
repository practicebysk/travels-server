require("dotenv").config({ path: './config.env' });
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(
    `JSON Server is running on http://localhost:${port}`
  );
});
