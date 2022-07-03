var segundos = 00;
var minutos = 00;
var horas = 00;
var interval;

function doisDigitos(digito) {
    if(digito<10) {
        return('0' + digito);
    }
    else {
        return(digito);
    }
}

function iniciar() {
    contador();
    interval = setInterval(contador, 1000);
}

function pausar() {
    clearInterval(interval);
}

function parar() {
    clearInterval(interval);
    segundos = 0;
    minutos = 0;
    document.getElementById('contador').innerText= '00:00:00';
}


function contador() {
    segundos++;
    if(segundos==60) {
        minutos++;
        segundos=00;
        if(minutos == 60) {
            minutos = 0;
            horas++;
        }
    };
    document.getElementById('contador').innerText= doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}