import controlTemas from "./control-temas.js";
import mostarDatos from "./mostar-datos.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    mostarDatos(".display__data", ".keyboard__key");
});
controlTemas(".bar");