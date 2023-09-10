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

        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right');
        

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    style(){
        
    }

}
customElements.define('card-news', cardNews);