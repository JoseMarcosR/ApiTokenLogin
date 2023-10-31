import jwt from "jsonwebtoken";

const accessTokenSecret = "tokensecreto"
//const refreshTokenSecret = "refreshtokensecreto"

//es como una variable constante, que funciona como función
//viene el user como parametro
const tokenSign = (user) =>{
    //vamos a devolver un objeto con el usuario, token secreto y cuando expira
    const token = jwt.sign({
        usuario:user},
        accessTokenSecret,
        {expiresIn: '1h'}
        )
    return token
}

//para verificar un token que se le pasa por parametro
const verifyToken = (token)=>{
    try{
        //verificacion
        return jwt.verify(token, accessTokenSecret)
    }
    catch(e){
        return null
    }
}

export default { tokenSign, verifyToken}