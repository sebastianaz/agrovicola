const dataTareas = require('../models/tasks')
const dataNotas = require('../models/notes')
const notastareasCtrl = {};

//  1: renderiza pagina con todas las notas y tareas
notastareasCtrl.renderAllNotasTareas = async (req,res)=>{
    const allTareas = await dataTareas.find().sort({$natural:-1}).lean();
    const allNotas  = await dataNotas.find().sort({$natural:-1}).lean();
    res.render('notasytareas/rendernotastareas',{allNotas,allTareas})
}
//  2: renderiza los formularios de Tareas y Notas
notastareasCtrl.formNotasTareas = (req,res)=>{
    res.render('notasytareas/formnotastareas')
}
//  3:  recibe Data Form por Post de Tareas
notastareasCtrl.createTarea = async (req,res)=>{//post
    let {tareas,titulo,description,datetask} =req.body
    const newDataTarea = new dataTareas({tareas,titulo,description,datetask})
    await newDataTarea.save();
    res.redirect('/notasytareas')
}
//  4: recibe Data Form por Post de Notas
notastareasCtrl.createNotes = async (req,res)=>{//post
    console.log(req.body);
    let {notas,titulo,description,fecha} = req.body;
    const newDataNota = new dataNotas({notas,titulo,description,fecha})
    await newDataNota.save();
    res.redirect('/notasytareas')
}

//  5: 
notastareasCtrl.eliminarNotaId = async (req,res)=>{
    console.log(req.params);
    var notasId = req.params.id;
    await dataNotas.findByIdAndDelete(notasId,(err,docs)=>{
        if(err){console.log(err)}
        else{console.log("Removed note: ",docs);}
    })
    res.redirect('/notasytareas');
}
//  6:  
notastareasCtrl.eliminarTareaId = async(req,res)=>{
    console.log(req.params);
    let tareaId = req.params.id;
    await dataTareas.findByIdAndDelete(tareaId,(err,docs)=>{
        if(err){console.log(err)}
        else{console.log("Removed note: ",docs);}
    })
    res.redirect('/notasytareas');

}

notastareasCtrl.terminadaTarea = async(req,res)=>{
    console.log(req.params.id);
    let tareaId = req.params.id;
    await dataTareas.findByIdAndUpdate(tareaId,{terminada:true},(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            console.log("update Task: ",docs);
        }
    });
    res.redirect('/notasytareas')
}

module.exports = notastareasCtrl;