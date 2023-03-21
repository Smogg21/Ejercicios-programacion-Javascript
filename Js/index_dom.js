import scrollTopButton from "./boton_scroll.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import webCam from "./deteccion_webcam.js";
import networkStatus from "./detección_red.js";
import getGeolocation from "./geolocalizacion.js";
import hamburguerMenu from "./menu-hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema-oscuro.js";

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
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=OWJMNYpRikE" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/OWJMNYpRikE?start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/wMytTKRMoHfgcvoL7" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8590149181446!2d-77.03269023403675!3d-12.121797396603965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c819aaa84439%3A0x52deb1f4f48d8bb2!2sParque%20Kennedy%2C%20Miraflores%2015074!5e0!3m2!1ses-419!2spe!4v1678830995186!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

responsiveTester("responsive-tester")
userDeviceInfo("user-device")
webCam("webcam");
getGeolocation("geolocation");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();