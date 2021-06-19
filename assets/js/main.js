const d = document;

const soloNumeros = dato => (dato >= "0" && dato <= "9");
const soloUnDato = dato => (dato === 1) ? true : false;
const mostarDatos = (selecDisplay, selecBoton) => {
    const $display = d.querySelector(selecDisplay);
    
    d.addEventListener('click', e => {
        if(e.target.matches(selecBoton)){
            let $datosDisplay = $display.textContent;

            if(e.target.textContent === "RESET") $display.textContent = "0";

            if(e.target.textContent === "DEL" && !soloUnDato($datosDisplay.length)) 
                $display.textContent = $datosDisplay.slice(0, $datosDisplay.length - 1);
            else if(e.target.textContent === "DEL" && soloUnDato($datosDisplay.length))
                $display.textContent = "0";
        
            if($datosDisplay === "0" && soloNumeros(e.target.textContent)) 
                $display.textContent = e.target.textContent;
            else if(soloNumeros(e.target.textContent)) 
                $display.textContent += e.target.textContent;

        }
    })
};

d.addEventListener("DOMContentLoaded", e => {
    mostarDatos(".display__data", ".keyboard__key");
});