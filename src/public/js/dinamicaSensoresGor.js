let valoresEngorde = document.getElementsByClassName('engordeData');

let humiValue  = [];
let tempValue  = [];
let lumeValue  = [];
let gassValue  = [];
let todosFecha = [];

for(let i=0; i<valoresEngorde.length;i++){
    let auxdata;
    let auxfecha;

    auxdata = valoresEngorde[i].name;
    auxfecha = valoresEngorde[i].id;
    var diasFecha = auxfecha.split(" ");
    var HTLG = auxdata.split("/");

    todosFecha.unshift(diasFecha[4]);
    humiValue.unshift(HTLG[0]);
    tempValue.unshift(HTLG[1]);
    lumeValue.unshift(HTLG[2]);
    gassValue.unshift(HTLG[3]);
};

var chartHumedadEngorde     = document.getElementById("myChartHumedad").getContext('2d');
var chartTemperaturaEngorde = document.getElementById("myChartTemperatura").getContext('2d');
var chartGasesEngorde       = document.getElementById("myChartGases").getContext('2d');
var chartLuminosidadEngorde = document.getElementById("myChartLuminosidad").getContext('2d');

let EngordeHumedad = new Chart(chartHumedadEngorde,{
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


let EngordeTemperatura = new Chart(chartTemperaturaEngorde,{
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

let EngordeGases = new Chart(chartGasesEngorde,{
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

let EngordeLuminosidad = new Chart(chartLuminosidadEngorde,{
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