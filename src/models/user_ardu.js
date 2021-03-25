//esquema con los datos del cloudMQTT donde se conecta cada NodeMCU v3
const{ Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs')

const newNodeMCU = new Schema(
    {
    server:{type:String,required:true},
    user:{type:String,required:true},
    password:{type:String,required:true},
    port:{type:Number,required:true},
    username:{type:String,required:true},
    topics:{require:true},
    nombre:{type:String,required:true},
    email:{type:String,required:true},
    contrasena:{type:String,required:true}
    }
)

newNodeMCU.methods.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt)
}

newNodeMCU.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports= model('userNodeMCU',newNodeMCU)


