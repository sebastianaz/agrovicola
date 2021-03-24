const {Router} = require('express');
const routerSens = Router();
const {renderSensorsPonedoras,
        renderSensorsEngorde,
}= require('../controllers/sensors.controllers');


//  obtener informacion de sensores ponedoras y engorde
routerSens.get('/pollitas',renderSensorsPonedoras);
routerSens.get('/gorditos',renderSensorsEngorde)



module.exports = routerSens;