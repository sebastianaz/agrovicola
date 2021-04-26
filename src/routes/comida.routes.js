const {Router} = require('express');
const comidaRouter = Router();
// Metodos de res,req para capa de comida
const { createComida,
        renderComidas,
        formularioComida,
        deleteComida,
        actualizarComidaAves,
        formularioActualizacionComida
        }= require('../controllers/comida.controllers')
const {isAuthenticated} = require('../helpers/auth')
//  control de comida
comidaRouter.get('/registroscomida',isAuthenticated,renderComidas)
comidaRouter.get('/comida',isAuthenticated,formularioComida)
comidaRouter.post('/comidaponedora',createComida)
comidaRouter.post('/comidaengorde',createComida)


//delete registros: se hace un cambio para actualizacion
comidaRouter.get('/delete/:id',isAuthenticated,deleteComida);
//comidaRouter.get('/delete/ponedora/:id',deletePonedora);

// 3: actualizacion de datos Comida Aves
comidaRouter.post('/actualizacion', formularioActualizacionComida)
comidaRouter.put('/editcomida/:id', actualizarComidaAves);

module.exports = comidaRouter