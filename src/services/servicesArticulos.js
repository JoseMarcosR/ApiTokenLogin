import { Articulo } from "../models/articulos.js";

async function getArticuloById(id){
    return await Articulo.findOne({where:{id:id}})
}

//actualizar
async function updateArtById(id, precioNuevo=null, stockNuevo = null){
    const articulo = await getArticuloById(id)
    
    if(articulo){
        if(precioNuevo !== null || stockNuevo !== null ){
            if(typeof precioNuevo == 'number'){
                articulo.precio = precioNuevo
            }
            if(typeof stockNuevo == 'number'){
                articulo.stock = stockNuevo
            }
            return articulo
        }
    }
    else{
        return {message: 'Articulo no encontrado'}
    }
}

async function nuevoArt(id, precio, stock){
    const artNuevo = await Articulo.create({
        id,
        precio,
        stock
    })
    return artNuevo;
}

async function eliminarArt(id){
    const artAEliminar = await getArticuloById(id)
    if(artAEliminar){
        const artEliminado = await artAEliminar.destroy()
        return artEliminado
    }
}

export default {
    getArticuloById, 
    updateArtById, 
    nuevoArt, 
    eliminarArt}