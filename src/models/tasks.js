const { Schema, model }=require('mongoose');

const newTask = new Schema({
    tareas      :{type:String,required:true},
    titulo      :{type:String,required:true},
    description :{type:String,required:true},
    datetask    :{type:String,required:true},
    terminada   :{type:Boolean,default:false},
    date        :{ type: Date, default: Date.now }
})


module.exports= model('modelTask',newTask)
