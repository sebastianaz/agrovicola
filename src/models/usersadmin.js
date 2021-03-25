const{ Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs')

const userAdministrador = new Schema(
    {
    password:{type:String,required:true},
    nombre:{type:String,required:true},
    email:{type:String,required:true, unique:true}
    }
)

userAdministrador.methods.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}

userAdministrador.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports= model('userAdm',userAdministrador)


