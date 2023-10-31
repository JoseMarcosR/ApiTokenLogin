import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("Nombre de la BD","Usuario","contraseña",{
  dialect: "sqlite",
  storage: "src/data/data.sqlite", // Ruta donde se almacenará la base de datos SQLite
});

