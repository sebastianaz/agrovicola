//El esquema de lectura de sensores HLTG resumidos en subscribe
const{ Schema, model } = require('mongoose');

const sensorSchema = new Schema(
    {
    varSensada:{type: String,required: true}, //temperatura, luminosidad, gases, humedad
    valor     :{type: String, required:true},
    date      :{ type: Date, default: Date.now },
    },
    {timestamps: true}
)



module.exports = model('sensData', sensorSchema) // guarda en MongoDB como "sensData"
