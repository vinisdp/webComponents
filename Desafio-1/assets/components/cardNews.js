class cardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build(){
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card');

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left');

        const autor = document.createElement('span');
        const titulo = document.createElement('a');
        const texto = document.createElement('p');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(texto);


        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');
        
        const imagem = document.createElement('img');
        imagem.setAttribute('src','/Desafio-1/assets/imagens/darthVader.jpg');

        cardRight.appendChild(imagem);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style(){
        
    }

}
customElements.define('card-news', cardNews);