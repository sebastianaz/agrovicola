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

//  control de comida
comidaRouter.get('/registroscomida',renderComidas)
comidaRouter.get('/comida',formularioComida)
comidaRouter.post('/comidaponedora',createComida)
comidaRouter.post('/comidaengorde',createComida)

//delete registros
comidaRouter.get('/delete/engorde/:id',deleteEngorde);
comidaRouter.get('/delete/ponedora/:id',deletePonedora);

// 3: graficos y analisis de datos Comida Aves
comidaRouter.get('/graficoscomida',graficosComidaAves);

module.exports = comidaRouter