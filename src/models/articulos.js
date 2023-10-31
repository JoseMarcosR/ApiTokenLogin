
import { sequelize } from "../data/configdb.js";
import { DataTypes} from "sequelize";

export const Articulo = sequelize.define(
    "Articulo",{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER

        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull: false

        }
    },{
        sequelize,
        timestamps:false
    })
