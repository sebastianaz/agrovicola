const {Router} = require('express');
const comidaRouter = Router();
// Metodos de res,req para capa de comida
const { createComida,
        renderComidas,
        formularioComida,
        deleteEngorde,
        deletePonedora,
        graficosComidaAves
        }= require('../controllers/comida.controllers')
const {isAuthenticated} = require('../helpers/auth')
//  control de comida
comidaRouter.get('/registroscomida',isAuthenticated,renderComidas)
comidaRouter.get('/comida',isAuthenticated,formularioComida)
comidaRouter.post('/comidaponedora',createComida)
comidaRouter.post('/comidaengorde',createComida)

//delete registros
comidaRouter.get('/delete/engorde/:id',deleteEngorde);
comidaRouter.get('/delete/ponedora/:id',deletePonedora);

// 3: graficos y analisis de datos Comida Aves
comidaRouter.get('/graficoscomida',isAuthenticated,graficosComidaAves);

module.exports = comidaRouter