const express = require('express');
const path    = require('path');
const exphbs  = require('express-handlebars');
const morgan  = require('morgan');
const favicon = require('serve-favicon');

//====  initializations  === 
const app = express();


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
    layoutsDir : path.join(__dirname,'views','layouts'),
    partialsDir: path.join(__dirname,'views','assets'),
    extname: '.hbs'
    }));
app.set('view engine','.hbs')
//Middle-wares
app.use(favicon(path.join(__dirname,'public','favicon.png')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//global Variables
//routes
app.use('/',routes);
app.use('/',routesSensorsArdu);
app.use('/',routesComidaAves);
app.use('/',routerNotesTask);
app.use('/',routerAgricultor);
//static files
app.use(express.static(path.join(__dirname,'public')))


module.exports = app;