
const supertest = require('supertest')

describe('GET /api/articulos', ()=>{

    it('Debería devolver un Cod 200 con un objeto con la lista de todos los articulos', async ()=>{
        const res = await supertest('localhost:3000').get('/api/articulos')

        expect(res.statusCode).toEqual(200)
        expect(res.header['content-type']).toEqual('application/json; charset=utf-8')

        expect(Array.isArray(res.body)).toBe(true)
        
        res.body.forEach(art => {expect.objectContaining({
            "id": expect.any(Number),
            "precio": expect.any(Number),
            "stock": expect.any(Number)
        })
            
        });
        
    })
    /*
    it('Debería devolver un error 500', async ()=>{
        const res = await supertest('localhost:3000').get('/api/articulos')

        expect(res.status).toEqual(500)
        expect(res.header['content-type']).json('application/json; charset=utf-8')

        expect(res.body).toEqual(objectContaining({
            "message":'Error interno, no se pudo acceder a la lista de articulos'
        }))
    })
    */

})
