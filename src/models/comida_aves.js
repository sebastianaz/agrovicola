const{ Schema, model } = require('mongoose');

const pesosComida = new Schema(
    {
    ponedora_engorde:{type: String,required: true}, //temperatura, luminosidad, gases, humedad
    masa_sobrante   :{type: Number, required:true},
    masa_agregada   :{type: Number, required:true},
    suplementos     :{type: Array},
    date            :{type: Date, default: Date.now }
    }
)

module.exports = model('pesoComida', pesosComida)