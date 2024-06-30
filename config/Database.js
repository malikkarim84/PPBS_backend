import { Sequelize } from "sequelize";

const db = new Sequelize('db_sysuser','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;