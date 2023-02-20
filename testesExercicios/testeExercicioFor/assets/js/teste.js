function meuEscopo(){
    const container = document.querySelector('.container');
    const div = document.createElement('div');

    const info = [
        {tag: 'h3', texto: 'texto inserido'},
        {tag: 'h5', texto: 'texto com h5'},
        {tag: 'h6', texto: 'texto com H8'}
    ];

    for(let i = 0; i < info.length; i++){
        const {tag, texto} = info[i];

        const criaTag = document.createElement(tag);
        criaTag.innerText += texto;
        div.appendChild(criaTag);

    }
    container.appendChild(div)
}
meuEscopo();