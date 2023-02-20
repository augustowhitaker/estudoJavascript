function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12: false
    });
}

// setInterval se usa para ter um intervalo
const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1111)

setTimeout(function() {
    clearInterval(timer);
}, 11111);