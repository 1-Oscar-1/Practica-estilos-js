  
let itemReloj = document.getElementById("tiempo");
var residuo = 0;
setInterval(function reloj(){
    //Se obtiene el tiempo del ordenador y se pone en el html
    tiempo = new Date();
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();

    if(horas < 10){
        horas = "0"+horas
    }else if(minutos < 10){
        minutos = "0"+minutos
    }else if(segundos < 10){
        segundos = "0"+segundos
    }

    itemReloj.innerHTML = horas + ":" + minutos + ":" + segundos;

    //Se cambia de color el fondo del body si los segundos son numeros pares
    residuo = segundos % 2;
    if(residuo == 0){
        document.body.style.backgroundColor="red";
    }else{
        document.body.style.backgroundColor="orange";
    }
}, 1000);