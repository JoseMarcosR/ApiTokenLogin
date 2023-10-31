import { sequelize } from "../data/configdb.js";
import { DataTypes } from "sequelize";


export const Usuario = sequelize.define("Usuario",
    {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        rol:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['admin', 'rol1', 'rol2']]
            }
        },
        pass:{
            type: DataTypes.STRING,
            allowNull: false  
        }
    },{
        sequelize,
        timestamps: false
    }
        )
