require("dotenv").config({ path: './config.env' });
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router1 = jsonServer.router(path.join(__dirname, "db1.json"));
const router2 = jsonServer.router(path.join(__dirname, "db2.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use("/travel", router1); 
server.use("/portfolio", router2); 

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
