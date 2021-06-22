const d = document;
let resultado = 0;
let operacionActual = "";


const soloNumeros = dato => (dato >= "0" && dato <= "9");
const caracteresEspeciales = dato => (dato >= 43 && dato <= 120) 
    && !(dato >= 48 && dato <= 57);
const caracteresOperaciones = dato => !(dato >= 48 && dato <= 57);
const soloUnDato = dato => dato === 1;
const operaciones = {
    "+": function(dato){
        resultado += parseFloat(dato.textContent);
        operacionActual = "+";
    },
    "-": function(dato){
        resultado -= parseFloat(dato.textContent);
        operacionActual = "-";
    },
    "x": function(dato){
        resultado *= parseFloat(dato.textContent);
        operacionActual = "x";
    },
    "/": function(dato){
        resultado /= parseFloat(dato.textContent);
        operacionActual = "/";
    },
    "RESET": function(dato){
        dato.textContent = "0";
        resultado = 0;
        operacionActual = "";
    },
    "=": function(dato){
        this[operacionActual](dato);
        dato.textContent = resultado;
    }
}


const mostarDatos = (selecDisplay, selecBoton) => {
    const $display = d.querySelector(selecDisplay);
    const teclasEspeciales = {
        ".": (display) => {
            if(!display.textContent.includes("."))
                display.textContent += ".";
        },
        "DEL": (display) => {
            if(!soloUnDato(display.textContent.length)){
                const longitudDatos = display.textContent.length - 1,
                    datosActualizados = display.textContent.slice(0, longitudDatos);

                display.textContent = datosActualizados;
            }else if(soloUnDato(display.textContent.length)){
                display.textContent = "0";
            }
        }
    };
    
    d.addEventListener('click', e => {    
        if(e.target.matches(selecBoton)){
            if(soloNumeros(e.target.textContent) && $display.textContent === "0")
                $display.textContent = e.target.textContent;
            else if(soloNumeros(e.target.textContent))
                $display.textContent += e.target.textContent;
            
            if(caracteresEspeciales(e.target.textContent.charCodeAt()))
                teclasEspeciales[e.target.textContent]($display);

        }
    });
};

export default mostarDatos;