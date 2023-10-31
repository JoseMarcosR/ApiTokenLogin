import { Usuario } from "../models/usuarios.js";

async function getUserById(id){
    return await Usuario.findOne({where:{id:id}})
}

async function logeo(id, pass){
    const user = await getUserById(id)
    if(user){
        if(user.pass == pass){
            return user
        }
    }
    else{
        return null;
    }
}

export default {getUserById, logeo}

