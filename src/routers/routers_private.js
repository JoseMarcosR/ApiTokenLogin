

import express from "express";
import { auth } from "../seguridad/jwt_auth.js"

import { Articulo } from "../models/articulos.js";
import servicesArticulos from "../services/servicesArticulos.js";
import servicesUsers from "../services/servicesArticulos.js"
import { Usuario } from "../models/usuarios.js";

export const router_private = express.Router()

router_private.use(auth)


router_private.get('/users/:id', async function (req,res){
    const {id} = req.params
    const user = await servicesUsers.getUsersById(id)
    res.json(user)
})

router_private.get('/users', async function (req, res){
    const lista = await Usuario.findAll({})
    res.json(lista)
})


router_private.get('/articulos', async function (req, res){
    try{
            const lista = await Articulo.findAll({})
            res.json(lista)
    }
    catch(e){
            res.status(500).json({message:'Error interno, no se pudo acceder a la lista de articulos'})
    }
})

router_private.get('/get/articulos/:id', async function (req, res){
    try{
        const {id} = req.params
        const art = await servicesArticulos.getArticuloById(id)

        if(art){
            res.json(art)
        }
        else{
            res.status(400).json({message: 'Articulo no encontrado'})
        }
    }
    catch(e){
        res.status(500).json({message: 'Error interno, no pudo consultarse el articulo'})
    }
})

router_private.put('/articulos', async function (req,res){
  try{
        const {id, precio, stock} = req.body
        if(id){
            const artActualizado = await servicesArticulos.updateArtById(id, precio, stock)

            if(artActualizado){
                res.json(artActualizado)
            }
            else if('message' in artActualizado){
                res.status(400).json(artActualizado)
            }
        }
        else{
            res.status(400).json({message: 'No se ha pasado un ID de articulo'})
        }
  } 
  catch(e){
        res.status(500).json('Error interno, no se pudo actualizar el articulo')
  } 
})

router_private.post('/articulos', async function (req,res){
    try{
        const {id, precio, stock} = req.body
        const artCreado = await servicesArticulos.nuevoArt(id, precio, stock)
        if(artCreado){
            res.json(artCreado) 
        }
        else{
            res.status(400).json({message: 'No se pudo crear el articulo'})
        }
    }
    catch(e){
        res.status(500).json({message: 'Error interno, no se pudo crear el articulo'})
    }
})

router_private.delete('/articulos/:id', async function (req, res){
    try{
        const {id} = req.params
        const artEliminado = await servicesArticulos.eliminarArt(id)

        if(artEliminado){
            res.json(artEliminado)
        }
        else{
            res.status(400).json({message:'Articulo no encontrado'})
        }
    }
    catch(e){
        res.status(500).json({message:'Error interno, no se pudo eliminar'})
    }
})