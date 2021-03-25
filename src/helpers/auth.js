
const helpers = {};

helpers.isAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }
    req.flash('error_msg', 'No Estas Autorizado para ingresar a esta parte de la Tecnologia, debes Autenticarte')
    res.redirect('/signin')
}


module.exports = helpers;