class cardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = "<h1>Hello World</h1>";
    }

    build(){

    }

    style(){
        
    }

}
customElements.define('card-news', cardNews);