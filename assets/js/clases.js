const d = document;

export class Calculadora{
    constructor(selecDisplay){
        this.$display = d.querySelector(selecDisplay);
        this.$display.textContent = "HOLA";
    }
}