import { Sequelize } from "sequelize";
import appModel from "../models/App.js";

const configData = await import("./config.json", { assert: { type: "json" } });
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
