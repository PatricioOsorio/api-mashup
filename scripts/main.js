import llenarFormClima from './proceso/llenar_form_clima.js'; // Funcion para llenar formulario "Weather"
import llenarFormClimaCapital from './proceso/llenar_form_capital.js'; // Funcion para llenar formulario "Weather"
import llenarFormDivisas from './proceso/llenar_form_divisas.js'; // Funcion para llenar formulario "Currency"
import llenarFormGasolinas from './proceso/llenar_form_gasolinas.js'; // Funcion para llenar formulario "Fuel"

import mostrarClima from './proceso/mostrar_clima.js'; 
import mostrarCambioFondo from './proceso/mostrar_cambio_fondo.js'; 
import mostrarVideo from './proceso/mostrar_video.js';
import mostrarMapa from './proceso/mostrar_mapa.js';
import mostrarCambioDivisa from './proceso/mostrar_cambio_divisa.js';
import mostrarGasolinas from './proceso/mostrar_gasolinas.js';
import mostrarClimaDetalles from './proceso/mostrar_clima_detalles.js';

import cerrarModal from './proceso/cerrar_modal.js';

const d = document;



// EVENTO, cuando el DOM haya sido cargado
d.addEventListener('DOMContentLoaded', async (e) => {
  // Mostrar paises en el formulario "Weather"
  llenarFormClima();

  // Mostrar simbolos en el formulario "Currency"
  llenarFormDivisas();

  // Mostrar gasolinas en el formulario "Fuel"
  llenarFormGasolinas();
});



// EVENTO, para detectar un cambio de un "Dropdown List"
d.addEventListener('change', (e) => {
  const $formClimaPais = d.querySelector('#formWeather__country');

  // Cuando se seleccione un pais en el formulario
  // Se llenará el "DropBox" con la capital del pais
  if (e.target === $formClimaPais) llenarFormClimaCapital(e);
});



// EVENTO, cuando se presione algún boton de los formularios
d.addEventListener('submit', async (e) => {
  e.preventDefault(); // Previene el funcionamiento por defecto

  const $formClima = d.querySelector('.formWeather'); // Formulario "Weather"
  const $formDivisas = d.querySelector('.formCurrency'); // Formulario "Currency"
  const $formGasolinas = d.querySelector('.formFuel'); // Formulario "Fuel"

  // Si se presiona el boton del formulario "Weather"
  if (e.target === $formClima) {
    // Se obtiene el pais
    const pais = $formClima.querySelector('#formWeather__country').value;
    // Se obtiene la capital
    const capital = $formClima.querySelector('#formWeather__capital').value;

    mostrarClima(capital);
    mostrarCambioFondo(`${pais} ${capital}`);
    mostrarVideo(pais, capital);
    mostrarMapa(pais, capital);
  }

  // Si se presiona el boton del formulario "Currency"
  if (e.target === $formDivisas) {
    mostrarCambioDivisa();
  }

  // Si se presiona el boton del formulario "Fuel"
  if (e.target === $formGasolinas) {
    mostrarGasolinas();
  }
});



// EVENTO, cuando se presione algun elemento del HTML
d.addEventListener('click', async (e) => {
  // Si se presiona el elemento "mas detalles" del clima, abre la ventana modal
  if (e.target.matches('.weather__moreinfo *')) mostrarClimaDetalles();

  // Si se presiona el boton de cerrar, de la ventana modal
  if (e.target.matches('.weatherModal__close *')) cerrarModal();
});
