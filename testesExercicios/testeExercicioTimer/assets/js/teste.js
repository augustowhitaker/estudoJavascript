function meuEscopo(){
    function pegaHorasPorSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });

    }
        const relogio = document.querySelector('.relogio');
        let segundos = 0
        let timer;

        function iniciaRelogio(){
            timer = setInterval(function(){
                segundos++
                relogio.innerHTML = pegaHorasPorSegundos(segundos);

            }, 1000);
        }

        document.addEventListener('click', (e) => {
            const el = e.target;

            if(el.classList.contains('iniciar')){
                clearInterval(timer);
                relogio.classList.remove('pausado')
                iniciaRelogio();
            }

            if(el.classList.contains('zerar')){
                clearInterval(timer);
                relogio.classList.remove('pausado');
                relogio.innerHTML = '00:00:00'
                segundos = 0;
            }

            if(el.classList.contains('pausar')){
                clearInterval(timer)
                relogio.classList.add('pausado')
            }
        });
        
}
meuEscopo();