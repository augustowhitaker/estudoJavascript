function sorteio(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = sorteio(min, max);

while(rand !== 10){
    rand = sorteio(min, max);
    console.log(rand);
}