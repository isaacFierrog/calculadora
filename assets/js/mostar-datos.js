const d = document;
let resultado = 0;
const soloNumeros = dato => (dato >= "0" && dato <= "9");
const soloUnDato = dato => (dato === 1) ? true : false;


const mostarDatos = (selecDisplay, selecBoton) => {
    const $display = d.querySelector(selecDisplay);
    
    d.addEventListener('click', e => {
        if(e.target.matches(selecBoton)){
            let $datosDisplay = $display.textContent;
            let operacionActual = "";
            const operaciones = {
                "+": function(){
                    resultado += parseInt($display.textContent);
                    $display.textContent = "0";
                },
                "-": function(){
                    resultado -= parseInt($display.textContent);
                    $display.textContent = "0";
                },
                "/": function(){
                    resultado /= parseInt($display.textContent);
                    $display.textContent = "0";
                },
                "x": function(){
                    resultado *= parseInt($display.textContent);
                    $display.textContent = "0";
                },
                "RESET": function(){
                    $display.textContent = "0";
                    resultado = 0;
                },
                "DEL": function(){
                    if(!soloUnDato($datosDisplay.length)){
                        $display.textContent = $datosDisplay
                            .slice(0, $datosDisplay.length - 1);
                    }else if(soloUnDato($datosDisplay.length)){
                        $display.textContent = "0";
                    }
                },
                "=": function(operacion){
                    $display.textContent = resultado;
                    resultado = 0;
                }
            }
                
            
            if($datosDisplay === "0" && soloNumeros(e.target.textContent)){ 
                $display.textContent = e.target.textContent;
            }else if(soloNumeros(e.target.textContent)){ 
                $display.textContent += e.target.textContent;
            }else{
                let operacion = operaciones[e.target.textContent];
                operacion();
            }
        }
    });
};

export default mostarDatos;