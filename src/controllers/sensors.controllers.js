const sensorsCtrl = {}
const mqttHandler = require('./mqtt.controllers')
const dataAves    = require('../models/sensors') 


var engordeMqttClient   = new mqttHandler('mqtt://m16.cloudmqtt.com','caezlyyt','UT_k9rid7tph',16594)
var ponedorasMqttClient = new mqttHandler('mqtt://m24.cloudmqtt.com','wbyeyecs','JY97cd5islf0',17403);
ponedorasMqttClient.connect();
engordeMqttClient.connect();

//1
sensorsCtrl.renderSensorsPonedoras = async(req,res) =>{
    
    const ponedorasData = await dataAves.find({varSensada:"/ponedoras/HTLG"}).sort({$natural:-1}).limit(30).lean();
    const luzABData = await dataAves.find({varSensada:"/ponedoras/LUZAB"}).sort({$natural:-1}).limit(1).lean();
    res.render('ponedoras',{ponedorasData,luzABData})
}
//2
sensorsCtrl.renderSensorsEngorde = async (req,res) =>{
    //engordeMqttClient.sendMessage('A')
    const engordeData = await dataAves.find({varSensada:"/engorde/HTLG"}).sort({$natural:-1}).limit(30).lean();
    const luzABData = await dataAves.find({varSensada:"/engorde/LUZAB"}).sort({$natural:-1}).limit(1).lean();
    res.render('engorde',{engordeData,luzABData})
}

module.exports = sensorsCtrl;