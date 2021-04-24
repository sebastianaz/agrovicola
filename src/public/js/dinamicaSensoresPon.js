const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

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

    todosFecha.unshift(diasFecha[4].slice(-8,5));
    humiValue.unshift(parseFloat(HTLG[0]));
    tempValue.unshift(parseFloat(HTLG[1]));
    lumeValue.unshift(parseFloat(HTLG[2]));
    gassValue.unshift(parseFloat(HTLG[3]));
};

var chartHumedadPonedoras     = document.getElementById("myChartHumedad").getContext('2d');
var chartTemperaturaPonedoras = document.getElementById("myChartTemperatura").getContext('2d');
var chartGasesPonedoras       = document.getElementById("myChartGases").getContext('2d');
var chartLuminosidadPonedoras = document.getElementById("myChartLuminosidad").getContext('2d');

let ponedorasHumedad = new Chart(chartHumedadPonedoras,{
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
                title: {
                    display: true,
                    text: 'humedad relativa (%)'
                },
                min: 55,
                max: 67,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 3
                    }
            }
        }
    }
});


let ponedorasTemperatura = new Chart(chartTemperaturaPonedoras, {
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
                title: {
                    display: true,
                    text: 'grados (C)'
                },
                min: 20,
                max: 40,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 4
                }
            }
        }
    }
});

let ponedorasGases = new Chart(chartGasesPonedoras, {
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
                title: {
                    display: true,
                    text: 'Concentracion (mg/L)'
                },
                min: 0,
                max: 10,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 2
                }
            }
        }
    }
});


let ponedorasLuminosidad = new Chart(chartLuminosidadPonedoras,{
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
            title: {
                display: true,
                text: 'Iluminancia (Lux)'
            },
            min: 5,
            max: 50,
            ticks: {
                // forces step size to be 50 units
                stepSize: 5
                }
        }
    }
}
});