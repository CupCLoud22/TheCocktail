class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                padding: 30px;
                width: 100%;
                text-align: center;
                font-size: 30px;
                background-color: #F0E5CF;
                color: rgb(63, 63, 63);
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 16px;
            }
        </style>
        <h2>The Cocktail</h2>`;
    }
}
  
customElements.define("app-bar", AppBar);