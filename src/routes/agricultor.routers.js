const {Router}= require('express');
const agricultorRouter = Router();
const {renderAllRegistrosAgricultor,
        formRegistrosAgricultor,
        saveRegistrosAgricultor} = require('../controllers/agricultor.controllers')

agricultorRouter.get('/agricultor',renderAllRegistrosAgricultor)
agricultorRouter.get('/agricultorformulario', formRegistrosAgricultor)
agricultorRouter.post('/agricultorformulario', saveRegistrosAgricultor)

module.exports = agricultorRouter;