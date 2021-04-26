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

objetoComida.suplementacionArray = (comida)=>{
    let suplementos = comida.suplementos;
    let aux = Array.from(suplementos);
    let maiz = aux[0] ; let suero = aux[1]; let forraje = aux[2]
    comida.suero = suero;
    comida.maiz = maiz;
    comida.forraje = forraje;
    console.log(comida);
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

objetoComida.fechaColombia = (comida)=>{
    var fecha;
    var auxFecha;
    auxFecha = comida.date;
    fecha = new Date(auxFecha.getTime()-300*60000);
    comida.date = fecha;
    return comida

}
module.exports = objetoComida;