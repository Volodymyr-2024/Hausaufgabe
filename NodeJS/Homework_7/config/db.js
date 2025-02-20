import { Sequelize } from "sequelize";
import appModel from "../models/App.js";
import fs from "fs";
// import configData from "./config.json" assert { type: "json" };

const configData = JSON.parse(
  fs.readFileSync(new URL("./config.json", import.meta.url))
);
const env = "development";
const config = configData[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);
const App = appModel(sequelize);
export default sequelize;
export { App };
