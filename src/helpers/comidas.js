const objetoComida = {};

objetoComida.suplementacion = (comida)=>{
    for(var i=0; i< comida.length; i++){
        var suplemen;
        var suple = comida[i].suplementos;
        suplemen = `[${suple[0]||0}, ${suple[1]||0}, ${suple[2]||0}]`;
        comida[i].suplementos = suplemen;
    }
    return comida
}

objetoComida.fecha = (comida)=>{
    for(var i=0; i< comida.length; i++){
        var fecha;
        var auxFecha;//new Date( documento.fecha.getTime() -  ( documento.offset * 60000 ) );
        var diaHora;
        auxFecha = comida[i].date
        fecha = new Date(auxFecha.getTime()-300*60000)
        diaHora = String(fecha).split(" ")
        comida[i].date = `${diaHora[1]}/${diaHora[2]} ${diaHora[0]}:${diaHora[4]}`

    }
    return comida

}
module.exports = objetoComida;