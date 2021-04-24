const sensorsCtrl = {};
const dataAves    = require('../models/sensors');

//1
sensorsCtrl.renderSensorsPonedoras = async(req,res) =>{
    const ponedorasData = await dataAves.find({varSensada:"/ponedoras/HTLG"}).sort({$natural:-1}).limit(360).lean();
    res.render('ponedoras',{ponedorasData})
}
//2
sensorsCtrl.renderSensorsEngorde = async (req,res) =>{
    const engordeData = await dataAves.find({varSensada:"/engorde/HTLG"}).sort({$natural:-1}).limit(360).lean();
    res.render('engorde',{engordeData})
}


module.exports = sensorsCtrl;