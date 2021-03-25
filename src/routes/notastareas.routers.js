const {Router} = require('express');
const routerNotesTask = Router();
const {isAuthenticated} = require('../helpers/auth')

const { renderAllNotasTareas,
    formNotasTareas,
    createNotes,
    createTarea,
    eliminarNotaId,
    eliminarTareaId,
    terminadaTarea,
    actualizarNota,
    notaActualizada
}= require('../controllers/notastareas.controllers');
const router = require('./index.routes');

routerNotesTask.get('/notasytareas',isAuthenticated,renderAllNotasTareas);
routerNotesTask.get('/formnotasytareas',isAuthenticated, formNotasTareas);
routerNotesTask.post('/createnota',createNotes);
routerNotesTask.post('/createtarea',createTarea);



routerNotesTask.get('/nota/delete/:id',eliminarNotaId);
routerNotesTask.post('/actualizar',isAuthenticated,actualizarNota);
routerNotesTask.get('/tarea/delete/:id',eliminarTareaId);
routerNotesTask.get('/tarea/actualizar/:id',terminadaTarea);
routerNotesTask.put("/edit-note/:id",notaActualizada);




module.exports= routerNotesTask;