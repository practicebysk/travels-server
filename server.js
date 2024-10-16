require("dotenv").config({ path: './config.env' });
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router1 = jsonServer.router(path.join(__dirname, "db.json"));
const router2 = jsonServer.router(path.join(__dirname, "db2.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

// Use routers with different routes
server.use("/api1", router1);  // Access db.json via /api1
server.use("/api2", router2);  // Access db2.json via /api2

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
