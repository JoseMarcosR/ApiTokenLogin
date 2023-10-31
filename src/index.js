import { sequelize } from "./data/configdb.js";
import { router_public } from "./routers/routers_public.js";
import { router_private } from "./routers/routers_private.js";
import express from 'express'

//ni idea
const app = express();

//para que use json?
app.use(express.json())

//definimos el url del router
app.use('/api', router_public)

//definimos el url del router privado
app.use('/api/private', router_private)

//levantamos el puerto
export const port = 3000;

app.listen(port, async()=>{
    await sequelize.sync(()=>{
        console.log(`Api escuchando en el puerto ${port}`)
    })
})
