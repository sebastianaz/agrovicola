let valoresPonedoras = document.getElementsByClassName('pollitasData');

let humiValue  = [];
let tempValue  = [];
let lumeValue  = [];
let gassValue  = [];
let todosFecha = [];

for(let i=0; i<valoresPonedoras.length;i++){
    let auxdata;
    let auxfecha;

    auxdata = valoresPonedoras[i].name;
    auxfecha = valoresPonedoras[i].id;
    var diasFecha = auxfecha.split(" ");
    var HTLG = auxdata.split("/");

    todosFecha.unshift(diasFecha[4]);
    humiValue.unshift(HTLG[0]);
    tempValue.unshift(HTLG[1]);
    lumeValue.unshift(HTLG[2]);
    gassValue.unshift(HTLG[3]);
};

var chartHumedadPonedoras     = document.getElementById("myChartHumedad").getContext('2d');
var chartTemperaturaPonedoras = document.getElementById("myChartTemperatura").getContext('2d');
var chartGasesPonedoras       = document.getElementById("myChartGases").getContext('2d');
var chartLuminosidadPonedoras = document.getElementById("myChartLuminosidad").getContext('2d');

let ponedorasHumedad = new Chart(chartHumedadPonedoras,{
    type: 'line',
    data:{
        labels : todosFecha,
        datasets : [{
            label: 'Humedad',
            data : humiValue, 
        }] 
},
options:{}
});


let ponedorasTemperatura = new Chart(chartTemperaturaPonedoras,{
    type: 'line',
    data:{
        labels : todosFecha,
        datasets : [{
            label: 'Temperatura',
            data : tempValue, 
        }] 
},
options:{}
});

let ponedorasGases = new Chart(chartGasesPonedoras,{
    type: 'line',
    data:{
        labels : todosFecha,
        datasets : [{
            label: 'Gases',
            data : gassValue, 
        }] 
},
options:{}
});

let ponedorasLuminosidad = new Chart(chartLuminosidadPonedoras,{
    type: 'line',
    data:{
        labels : todosFecha,
        datasets : [{
            label: 'Luminosidad',
            data : lumeValue, 
        }] 
},
options:{}
});