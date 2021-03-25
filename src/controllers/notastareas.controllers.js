const dataTareas = require('../models/tasks')
const dataNotas = require('../models/notes')
const notastareasCtrl = {};

//  1: renderiza pagina con todas las notas y tareas
notastareasCtrl.renderAllNotasTareas = async (req,res)=>{
    const allTareas = await dataTareas.find({user:req.user.id}).sort({$natural:-1}).lean();
    const allNotas  = await dataNotas.find({user:req.user.id}).sort({$natural:-1}).lean();
    res.render('notasytareas/rendernotastareas',{allNotas,allTareas})
}
//  2: renderiza los formularios de Tareas y Notas
notastareasCtrl.formNotasTareas = (req,res)=>{
    console.log(req.user);
    res.render('notasytareas/formnotastareas')
}
//  3:  recibe Data Form por Post de Tareas
notastareasCtrl.createTarea = async (req,res)=>{//post
    let {tareas,titulo,description,datetask} =req.body
    const newDataTarea = new dataTareas({tareas,titulo,description,datetask})
    newDataTarea.user = req.user.id
    //console.log(newDataTarea);
    await newDataTarea.save();
    req.flash('success_msg', `Tarea agregada Satistactoriamente por ${req.user.nombre}`)
    res.redirect('/notasytareas')
}
//  4: recibe Data Form por Post de Notas
notastareasCtrl.createNotes = async (req,res)=>{//post
    console.log(req.body);
    let {notas,titulo,description,fecha} = req.body;
    const newDataNota = new dataNotas({notas,titulo,description,fecha})
    newDataNota.user = req.user.id
    await newDataNota.save();
    req.flash('success_msg', `Nota agregada Satistactoriamente por ${req.user.nombre}`)
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
    req.flash('danger_msg', 'Nota ELIMINADA Satistactoriamente')
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
    req.flash('danger_msg', 'Tarea ELIMINADA Satistactoriamente')
    res.redirect('/notasytareas');

}
//     7:
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
    req.flash('success_msg','Tarea FINALIZADA satisfactorimente')
    res.redirect('/notasytareas')
}
//   8:
notastareasCtrl.actualizarNota = async (req,res)=>{
    console.log(req.body);
    const note = await dataNotas.findById({_id:req.body.id}).lean();
    console.log(note);
    res.render('notasytareas/actualizarnota',{note});
}


//   9: 
notastareasCtrl.notaActualizada = async(req,res)=>{
    const {titulo, description} = req.body;
    console.log(req.params);
    await dataNotas.findByIdAndUpdate(req.params.id,{titulo,description})
    req.flash("success_msg", "Nota actualizada Satisfactoriamente");
    res.redirect('/notasytareas')
}
module.exports = notastareasCtrl;