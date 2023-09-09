class tituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});

        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar component
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }`;
        
        
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}
customElements.define('titulo-dinamico', tituloDinamico);