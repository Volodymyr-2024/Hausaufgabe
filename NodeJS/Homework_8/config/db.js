import { Sequelize } from "sequelize";
import fs from "fs";
// import configData from "./config.json" assert { type: "json" };

const configData = JSON.parse(
  fs.readFileSync(new URL("./config.json", import.meta.url))
);

const env = process.env.NODE_ENV || "development";
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

export default sequelize;
