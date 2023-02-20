const pessoa = {
    nome: 'Fia',
    sobrenome: 'loca',
    idade: 31,
    endereco: {
        rua: 'jerico',
        numero: 255
    }
};

// Atribuicao via destruturacao

// const {nome , sobrenome, idade} = pessoa;
const {endereco: {rua, numero}} = pessoa;
console.log(rua,numero); 