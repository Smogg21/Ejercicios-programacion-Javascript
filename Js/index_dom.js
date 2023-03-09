import hamburguerMenu from "./menu-hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj")
    alarm("../assets/aestetic-alarm.mp3","#activar-alarma","#desactivar-alarma");
})

d.addEventListener("keydown", e=>{
    shortcuts(e)
    moveBall(e, ".ball", ".stage");
})

