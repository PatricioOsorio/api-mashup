import getClimaHoyYPronostico from '../peticion_clima/get_clima_hoy_y_pronostico.js';
import getInformacionCapital from '../peticion_clima/get_informacion_capital.js';
import getIconoClima from '../peticion_clima/get_icono_clima.js';

const d = document;
export default async function mostrarClima(capital) {
  // Elementos del HTML
  const $img = d.querySelector('.weather__img');
  const $maximo = d.querySelector('.weather__temperatureMax');
  const $minimo = d.querySelector('.weather__temperatureMix');
  const $velocidadAire = d.querySelector('.weather__wind');
  const $humedad = d.querySelector('.weather__humidity');
  const $lluvia = d.querySelector('.weather__rain');
  const $salidaSol = d.querySelector('.weather__sunrise');
  const $puestaSol = d.querySelector('.weather__sunset');

  const $error = d.querySelector('.weather__danger');
  const $moreInfo = d.querySelector('.weather__moreinfo');

  // Esperamos la peticion
  const jsonInformacionCapital = await getInformacionCapital(capital);

  // Si la respuesta json no tiene valores, muestra mensaje de error
  if (jsonInformacionCapital.length === 0) {
    $error.classList.remove('hidden');
    $moreInfo.classList.add('hidden');
  } else {
    // Si la respuesta json tiene valores, se mostraran en el HTML
    $error.classList.add('hidden');
    $moreInfo.classList.remove('hidden');

    // Peticion de la "woeid" de la capital
    const woeid = jsonInformacionCapital[0].woeid;

    // Peticion del clima y pronostico de la capital
    const jsonClimaHoy = await getClimaHoyYPronostico(woeid);

    // Se llenan en constantes, el resultado enviado de la api
    const jsonToday = jsonClimaHoy.consolidated_weather[0];

    const simbolo = jsonToday.weather_state_abbr;
    const tempMax = jsonToday.max_temp;
    const tempMin = jsonToday.min_temp;
    const velocidadAire = jsonToday.wind_speed;
    const humedad = jsonToday.humidity;
    const probabilidadLluvia = jsonToday.predictability;

    let fecha = new Date(jsonClimaHoy.sun_rise);
    const salidaSol = fecha.toLocaleTimeString();

    fecha = new Date(jsonClimaHoy.sun_set);
    const puestaSol = fecha.toLocaleTimeString();

    // Se agregan al HTML
    $img.src = await getIconoClima(simbolo);
    $maximo.textContent = tempMax.toFixed() + '°';
    $minimo.textContent = tempMin.toFixed() + '°';
    $velocidadAire.textContent = velocidadAire.toFixed(1) + 'mph';
    $humedad.textContent = humedad + '%';
    $lluvia.textContent = probabilidadLluvia + '%';
    $salidaSol.textContent = salidaSol;
    $puestaSol.textContent = puestaSol;
  }
}
