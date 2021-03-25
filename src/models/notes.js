const { Schema, model }=require('mongoose');

const newNote = new Schema({
    notas      :{type:String,required:true},
    titulo     :{type:String,required:true},
    description:{type:String,required:true},
    fecha      :{type:String,required:true},
    date       :{type:Date  ,default :Date.now},
    user       :{type:String,required: true}
})


module.exports= model('modelNote',newNote)