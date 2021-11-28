import llenarFormClima from './proceso/llenar_form_clima.js';
import llenarFormDivisas from './proceso/llenar_form_divisas.js';
import llenarFormGasolinas from './proceso/llenar_form_gasolinas.js';
import llenarFormCapital from './proceso/llenar_form_capital.js';

import mostrarClima from './proceso/mostrar_clima.js';
import mostrarCambioFondo from './proceso/mostrar_cambio_fondo.js';
import mostrarVideo from './proceso/mostrar_video.js';
import mostrarMapa from './proceso/mostrar_mapa.js';
import converitrDivisas from './proceso/convertir_divisas.js';
import procesoGasolinas from './proceso/proceso_gasolinas.js';

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
    converitrDivisas();
  }

  // Si se presiona el boton del formulario "Fuel"
  if (e.target === $formGasolinas) {
    procesoGasolinas();
  }
});
