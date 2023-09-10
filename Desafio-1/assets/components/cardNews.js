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
        autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

        const titulo = document.createElement('a');
        titulo.textContent = this.getAttribute('title');
        titulo.href = this.getAttribute('link-url');

        const texto = document.createElement('p');
        texto.textContent = this.getAttribute('content');

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(texto);


        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');
        
        const imagem = document.createElement('img');
        imagem.src = this.getAttribute('link-image') || '/Desafio-1/assets/imagens/foto-default.jpg';

        cardRight.appendChild(imagem);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style(){
        const style = document.createElement('style');
        style.textContent = `
            .card{
                width: 80%;
                border: 1px solid gray;
                display: flex;
                flex-direction: row;
                -webkit-box-shadow: 6px 8px 18px 4px rgba(0,0,0,0.65); 
                box-shadow: 6px 8px 18px 4px rgba(0,0,0,0.65);
                justify-content: space-between;
            }


            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            .card__left > span{
                font-weight: 400;
            }
            .card__left > a{
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            .card__left > p{
                color: rgb(70, 70, 70);
            }
        `

        return style;
    }

}
customElements.define('card-news', cardNews);