const indexCtrl = {};

indexCtrl.renderIndex = (req,res)=>{
    res.render('index')
}
indexCtrl.renderAbout = (req,res)=>{
    res.render('about')
}
indexCtrl.renderHuevos = (req,res)=>{
    res.render('huevos')
}
indexCtrl.renderCarnes = (req,res)=>{
    res.render('carnes')
}
indexCtrl.renderBiogas = (req,res)=>{
    res.render('biogas')
}


module.exports = indexCtrl