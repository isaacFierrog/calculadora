import { Calculadora } from "./clases.js";

const d = document;
let operador1 = "",
    operador2 = "",
    operacion = "",
    resultado = 0;

const noHayPunto = datos => !datos.includes(".");
const noSimbolos = dato => !"+/x".includes(dato);

export default function mostarDatos(selecDisplay, selecTecla){
    
    d.addEventListener("click", e => {
        const $display = d.querySelector(selecDisplay);
        const longitudDatos = $display.textContent.length;

        if(!e.target.matches(selecTecla)) return;

        /*Logica boton IGUAL*/ 
        if(e.target.textContent === "+"){
            operador1 = $display.textContent;
            operacion = "+";
            return $display.textContent = "0";
        }

        if(e.target.textContent === "-"){
            operador1 = $display.textContent;
            operacion = "-";
            return $display.textContent = "0";
        }

        if(e.target.textContent === "x"){
            operador1 = $display.textContent;
            operacion = "x";
            return $display.textContent = "0";
        }

        if(e.target.textContent === "/"){
            operador1 = $display.textContent;
            operacion = "/";
            return $display.textContent = "0";
        }

        if(e.target.textContent === "="){
            operador2 = $display.textContent;
            
            if(operacion === "+") resultado = parseFloat(operador1) + parseFloat(operador2);
            if(operacion === "-") resultado = parseFloat(operador1) - parseFloat(operador2);
            if(operacion === "x") resultado = parseFloat(operador1) * parseFloat(operador2);
            if(operacion === "/") resultado = parseFloat(operador1) / parseFloat(operador2);
            
            $display.textContent = ("" + (resultado));
            operador1 = ("" + (resultado));
            operador2 = "";
            resultado = 0;
            return;
        }

        
        /*Logica boton RESET*/
        if(e.target.textContent === "RESET"){
            operador1 = "";
            operador2 = "";
            resultado = 0;
            return $display.textContent = "0";
        }
        
        /*Logica boton PUNTO*/ 
        if($display.textContent === "0" && e.target.textContent === ".")
            return $display.textContent += e.target.textContent;
        if($display.textContent.includes(".") && e.target.textContent === ".")
            return;
        
        /*Logica boton DEL*/
        if(longitudDatos === 1 && e.target.textContent === "DEL"){
            return $display.textContent = "0";
        }
        if($display.textContent !== "0" && e.target.textContent === "DEL"){
            let nuevosDatos = $display.textContent.slice(0, longitudDatos - 1);
            return $display.textContent = nuevosDatos;
        }

        /*Logica de los numeros*/
        if($display.textContent === "0" && e.target.textContent !== "0"){
            $display.textContent = e.target.textContent;
        }else if($display.textContent !== "0"){
            $display.textContent += e.target.textContent;
        }
    });
}