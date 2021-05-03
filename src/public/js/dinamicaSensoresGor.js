const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

let valoresEngorde = document.getElementsByClassName('engordeData');

let humiValue  = [];
let tempValue  = [];
let lumeValue  = [];
let gassValue  = [];
let todosFecha = [];

function horaLocal(fecha){
    var toDate 
    toDate = new Date(fecha);
    return String(toDate);
}

for(let i=0; i<valoresEngorde.length;i++){
    let auxdata;
    let auxfecha;

    auxdata = valoresEngorde[i].name;
    auxfecha = horaLocal(valoresEngorde[i].id)
    var diasFecha = auxfecha.split(" ");
    var HTLG = auxdata.split("/"); 

    todosFecha.unshift(diasFecha[4].slice(-8,5));// .slice(-8,5) quita los segundos de la hora
    humiValue.unshift(parseFloat(HTLG[0]));//agrega un elemento al inicio del array
    tempValue.unshift(parseFloat(HTLG[1]));
    lumeValue.unshift(parseFloat(HTLG[2]));
    gassValue.unshift(parseFloat(HTLG[3]));
};

var chartHumedadEngorde     = document.getElementById("myChartHumedad").getContext('2d');
var chartTemperaturaEngorde = document.getElementById("myChartTemperatura").getContext('2d');
var chartGasesEngorde       = document.getElementById("myChartGases").getContext('2d');
var chartLuminosidadEngorde = document.getElementById("myChartLuminosidad").getContext('2d');

let EngordeHumedad = new Chart(chartHumedadEngorde, {
    type: 'line',
    data: {
        labels: todosFecha,
        datasets: [{
            label: 'Humedad',
            data: humiValue,
            borderColor: CHART_COLORS.red,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'circle' ,
            pointRadius: 0,
            fill : true
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hora : minutos'
                }
            },
            y: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'humedad relativa (%)'
                },
                min: 40,
                max: 85,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 3
                    }
            }
        }
    }
});

let EngordeTemperatura = new Chart(chartTemperaturaEngorde, {
    type: 'line',
    data: {
        labels: todosFecha,
        datasets: [{
            label: 'Temperatura',
            data: tempValue,
            borderColor: CHART_COLORS.green,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'circle',
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hora : minutos'
                }
            },
            y: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'grados (C)'
                },
                min: 30,
                max: 40,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 1
                }
            }
        }
    }
});

let EngordeGases = new Chart(chartGasesEngorde, {
    type: 'line',
    data: {
        labels: todosFecha,
        datasets: [{
            label: 'Gases',
            data: gassValue,
            borderColor: CHART_COLORS.purple,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'circle',
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hora : minutos'
                }
            },
            y: {                
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Concentracion (mg/L)'
                },
                min: 0,
                max: 500,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 25
                }
            }
        }
    }
});

let EngordeLuminosidad = new Chart(chartLuminosidadEngorde,{
    type: 'line',
    data:{
        labels : todosFecha,
        datasets : [{
            label: 'Luminosidad',
            data : lumeValue,
            borderColor: CHART_COLORS.yellow,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
            pointStyle: 'circle' ,
            pointRadius: 0,
            fill : true 
        }] 
},
options:{
    scales: {
        x: {
            title: {
                display: true,
                text: 'Hora : minutos'
            }
        },
        y: {
            type: 'linear',
            position: 'right',
            title: {
                display: true,
                text: 'Iluminancia (Lux)'
            },
            min: 5,
            max: 120,
            ticks: {
                // forces step size to be 50 units
                stepSize: 15
                }
        }
    }
}
});




