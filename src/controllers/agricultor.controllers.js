const agricultorCtrl = {};

agricultorCtrl.renderAllRegistrosAgricultor = (req,res)=>{
    res.render('agricultor/renderregistrosmaiz')
}
agricultorCtrl.formRegistrosAgricultor = (req,res)=>{
    res.render('agricultor/formmaizsiembra')
}
agricultorCtrl.saveRegistrosAgricultor = (req,res)=>{
    res.redirect('/')
}
module.exports = agricultorCtrl;