const d = document,
    ls = localStorage;
const temas = {
    "1": {
        backDisplay: "#191F32",
        backMain: "#3B4664",
        backKeyboard: "#252C44",
        backKey: "#E8E3DD",
        backBall: "#CE3E31",
        colorTextDisplay: "#e0dfe6",
        colorKey: "#615D61",
        colorKeyErease: "#C1CFD6"
    },
    "2": {
        backDisplay: "#EFEFEF",
        backMain: "#E5E5E5",
        backKeyboard: "#D3CCCA",
        backKey: "#E6E5DE",
        backBall: "#C85501",
        colorTextDisplay: "#2D2E2B",
        colorKey: "#2C2A26",
        colorKeyErease: "#dedede"
    },
    "3": {
        backDisplay: "#310c5d",
        backMain: "#1C0735",
        backKeyboard: "#2b0b50",
        backKey: "#331B4C",
        backBall: "#00DECE",
        colorTextDisplay: "#FEE23A",
        colorKey: "#E2D477",
        colorKeyErease: "#d4e1ff"
    }
}
let numeroTema = 1;

const cambiarEstilos = temas => {
    const $html = d.documentElement;

    $html.style.setProperty("--back-display", temas.backDisplay);
    $html.style.setProperty("--back-main", temas.backMain);
    $html.style.setProperty("--back-keyboard", temas.backKeyboard);
    $html.style.setProperty("--back-key", temas.backKey);
    $html.style.setProperty("--back-ball", temas.backBall);
    $html.style.setProperty("--color-text-display", temas.colorTextDisplay);
    $html.style.setProperty("--color-key", temas.colorKey);
    $html.style.setProperty("--color-key-erease", temas.colorKeyErease);
}

const controlTemas = (selecBarra) => {
    const $barra = d.querySelector(selecBarra);
    const posiciones = {
        "1": (posicionActual) => $barra.classList
            .replace(posicionActual, "bar--left"),
        "2": (posicionActual) => $barra.classList
            .replace(posicionActual, "bar--center"),
        "3": (posicionActual) => $barra.classList
            .replace(posicionActual, "bar--right")
    }

    d.addEventListener("click", e => {
        if(e.target.matches(selecBarra) || 
            e.target.matches(`${selecBarra} *`)){

            if(numeroTema < 3) numeroTema++;
            else numeroTema = 1;
            
            posiciones[("" + numeroTema)]($barra.classList[1])
            cambiarEstilos(temas[("" + numeroTema)]);
            ls.setItem("tema", ("" + numeroTema));
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        if(!ls.getItem("tema")) ls.setItem("tema", "1");
        
        numeroTema = parseInt(ls.getItem("tema"));
        posiciones[ls.getItem("tema")]($barra.classList[1])
        cambiarEstilos(temas[ls.getItem("tema")]);
    });
}

export default controlTemas;