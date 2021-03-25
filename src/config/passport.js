const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const userAdm = require('../models/usersadmin')

passport.use(new localStrategy({
    usernameField: 'nombre',
    passwordField: 'password'
},async (nombre,password,done)=>{
    //comprovar email del user
    const user = await userAdm.findOne({nombre})
    if(!user){
        return done(null,false,{message:'no hay usuario encontrado'})
    }else{
        //match password
        const match = await user.matchPassword(password)
        if(match){return done(null,user)
        }else{return done(null,false,{message: 'Contrasena incorrecta'})}
    }
}));

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    userAdm.findById(id,(err,user)=>{
        done(err,user)
    })
})