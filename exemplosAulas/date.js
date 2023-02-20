// aula sobre date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);

// data atual
// const data = new Date();
// console.log(data.toString());

// criando uma funcao para zero a esquerda, pois nativamente nao ha
function zeroAEsquerda(num){;
    return num  >= 10 ? num : `0${num}`;
}
// funcao para formata a data
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date(); 
const dataBrasil = formataData(data);
console.log(dataBrasil);