import express from "express";
import jwt from "../utils/jwt.js"
import servicesUsers from "../services/servicesUsers.js";

//creamos un router
export const router_public = express.Router()

router_public.get('/', (req,res)=>{
    res.json({message: 'API REST SEGURA'})
})


router_public.post('/login', async (req,res) => {

    //agarramos todo lo que esté en el body
    const data = req.body

    //existe el usuario?
    const user = await servicesUsers.logeo(data.id, data.pass)

    if (user){
        //si existe el usuario que nos genere un token
        const token = jwt.tokenSign(user)
        
        //aca diseño lo que envio
        const userAuth = {
            id: user.id,
            email: user.email,
            rol: user.rol,
            token: token
        }

        //lo envio
        res.json(userAuth)
    }
    //si no encuentro user
    else{
        res.status(404).send({message: 'Usuario no encontrado o contraseña erronea'})
    }

})

