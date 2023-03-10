import countdown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu-hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm(
    "../assets/aestetic-alarm.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countdown("countdown", "February 7, 2038 06:28:16", "Feliz y2k 2.0");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
