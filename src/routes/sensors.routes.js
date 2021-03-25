const {Router} = require('express');
const routerSens = Router();
const {renderSensorsPonedoras,
        renderSensorsEngorde,
}= require('../controllers/sensors.controllers');
const {isAuthenticated} = require('../helpers/auth')

//  obtener informacion de sensores ponedoras y engorde
routerSens.get('/pollitas',isAuthenticated,renderSensorsPonedoras);
routerSens.get('/gorditos',isAuthenticated,renderSensorsEngorde)

module.exports = routerSens;