const express = require('express');
const path    = require('path');
const exphbs  = require('express-handlebars');
const morgan  = require('morgan');
const favicon = require('serve-favicon');
const flash   = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const methodOver =  require('method-override');

//====  initializations  === 
const app = express();
require('./config/passport')


//===   routes  ============
const routes            = require('./routes/index.routes');
const routesSensorsArdu = require('./routes/sensors.routes');
const routesComidaAves  = require('./routes/comida.routes');
const routerNotesTask   = require('./routes/notastareas.routers');
const routerAgricultor  = require('./routes/agricultor.routers');

//===  settings  ===========
app.set('port', process.env.PORT || 4000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir : path.join(app.get("views"),'layouts'),
    partialsDir: path.join(app.get("views"),'assets'),
    extname: '.hbs'
    }));
app.set('view engine','.hbs')
//Middle-wares
app.use(favicon(path.join(__dirname,'public','favicon.png')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodOver('_method'));
app.use(session({
    secret            : 'secret',
    resave            :'true',
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
//global Variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.danger_msg  = req.flash('danger_msg');
    res.locals.error_msg   = req.flash('error_msg');
    res.locals.error       = req.flash('error');
    res.locals.user        = req.user || null;
    next();
})
//routes
app.use('/',routes);
app.use('/',routesSensorsArdu);
app.use('/',routesComidaAves);
app.use('/',routerNotesTask);
app.use('/',routerAgricultor);
//static files
app.use(express.static(path.join(__dirname,'public')))


module.exports = app;