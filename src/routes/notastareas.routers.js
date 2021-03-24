const {Router} = require('express');
const routerNotesTask = Router();

const { renderAllNotasTareas,
    formNotasTareas,
    createNotes,
    createTarea,
    eliminarNotaId,
    eliminarTareaId,
    terminadaTarea
}= require('../controllers/notastareas.controllers');

routerNotesTask.get('/notasytareas',renderAllNotasTareas);
routerNotesTask.get('/formnotasytareas', formNotasTareas);
routerNotesTask.post('/createnota',createNotes);
routerNotesTask.post('/createtarea',createTarea);

routerNotesTask.get('/nota/delete/:id',eliminarNotaId);
routerNotesTask.get('/tarea/delete/:id',eliminarTareaId);
routerNotesTask.get('/tarea/actualizar/:id',terminadaTarea);

module.exports= routerNotesTask;