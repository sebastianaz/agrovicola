const userCtrl = {};
const usuarioAdm = require('../models/usersadmin');
const passport = require('passport');

//  1: formulario para ingresar
userCtrl.renderSignInForm = (req,res)=>{
    res.render('usuarios/signin')
}
//  2: POST del formulario de ingreso
userCtrl.signIn = passport.authenticate('local',{
    failureRedirect: '/signin',
    successRedirect: '/notasytareas',
    failureFlash: true
})
//  3: salida del perfil
userCtrl.logout = (req,res)=>{
    req.logout();
    req.flash('success_msg', ' Tu Usuario se he Cerrado Correctamente');
    res.redirect('/')
}
//  4: formulario de creacion de User
userCtrl.signUpUserForm = (req,res)=>{
    res.render('usuarios/signup')
}
//  5: POST formulario de creacion
userCtrl.createUser = async (req,res)=>{
    console.log(req.body);
    const errors = [];
    const {nombre,email,password,confirm}=req.body;
    if(password != confirm){
        errors.push({text: 'Contrasenas NO coinciden'})
    }
    if(password == ""){
        errors.push({text: 'Contrasenas esta en blanco'})
    }
    if(errors.length > 0){
        console.log(errors);
        res.render('usuarios/signup',{errors,nombre,email})
    }
    else{
        const emailUser = await usuarioAdm.findOne({email})
        if(emailUser){
            req.flash('error_msg','el correo ya esta en Uso')
            res.redirect('/signup')
        }
        else{
            const newUserAdm = new usuarioAdm({nombre,email,password});
            newUserAdm.password = await newUserAdm.encryptPassword(password);
            await newUserAdm.save();
            req.flash('success_msg','estas registrado')
            res.redirect('/signin')
        }
        
    }
}
module.exports = userCtrl;