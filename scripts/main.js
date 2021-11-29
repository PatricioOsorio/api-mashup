import llenarFormClima from './proceso/llenar_form_clima.js';
import llenarFormDivisas from './proceso/llenar_form_divisas.js';
import llenarFormGasolinas from './proceso/llenar_form_gasolinas.js';
import llenarFormCapital from './proceso/llenar_form_capital.js';

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
  // Obtener paises y capital
  llenarFormClima();

  // Mostrar simbolos del "Conversor"
  llenarFormDivisas();

  // Mostrar gasolinas
  llenarFormGasolinas();
});

// EVENTO, para detectar un cambio de un "Dropdown List"
d.addEventListener('change', (e) => {
  const $formClimaPais = d.querySelector('#formWeather__country');

  if (e.target === $formClimaPais) llenarFormCapital(e);
});

// EVENTO, cuando se presione un boton de formulario
d.addEventListener('submit', async (e) => {
  e.preventDefault(); // Previene el funcionamiento por defecto

  const $formClima = d.querySelector('.formWeather');
  const $formDivisas = d.querySelector('.formCurrency');
  const $formGasolinas = d.querySelector('.formFuel');

  // Si se presiona el boton del formulario "Weather"
  if (e.target === $formClima) {
    const pais = $formClima.querySelector('#formWeather__country').value;
    const capital = $formClima.querySelector('#formWeather__capital').value;

    mostrarClima(capital);
    mostrarCambioFondo(pais, capital);
    mostrarVideo('sadFM2Qi0wc');
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

// EVENTO, cuando se presione un boton
d.addEventListener('click', async (e) => {
  // e.preventDefault(); // Previene el funcionamiento por defecto
  const $btnWeatherMoreinfo = d.querySelector('.weather__moreinfo');

  if (e.target.matches('.weather__moreinfo *')) mostrarClimaDetalles();
  if (e.target.matches('.weatherModal__close *')) cerrarModal();
});
