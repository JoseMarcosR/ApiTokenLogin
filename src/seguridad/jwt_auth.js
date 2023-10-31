import jwt from "../utils/jwt.js";

//validar un token
/*
flujo normal
buscar la auth en los headers
saco el token de la cabecera

*/
export const auth = (req, res, next)=>{
    try{
        const tokenJWT = req.headers.authorization
        //si en el headers de authorization no viene nada
        if (!tokenJWT){ 
            res.status(400).send({message: 'Sin datos de autorizacion'})
        }

        else{
            //separamos en espacio por el bearer
            //y pop agarra el ultimo creo
            const token = tokenJWT.split(' ').pop()
            const rta = jwt.verifyToken(token)

            //si no hay respuesta
            if(!rta){
                res.status(401)
                res.send({message: 'JWT Token no valido'})
            }
            //si hay respuesta avanzamos
            else{
                next()
            }
        }
    }   
    catch(e){
        res.status(500).send({message: 'Ha ocurrido un error interno'})
    }    
}