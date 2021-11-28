import getClimaHoyYPronostico from '../peticion_clima/get_clima_hoy_y_pronostico.js';
import getInformacionCapital from '../peticion_clima/get_informacion_capital.js';
import getIconoClima from '../peticion_clima/get_icono_clima.js';

const d = document;
export default async function llenarClima(capital) {
  const $img = d.querySelector('.weather__img');
  const $maximo = d.querySelector('.weather__temperatureMax');
  const $minimo = d.querySelector('.weather__temperatureMix');
  const $velocidadAire = d.querySelector('.weather__wind');
  const $humedad = d.querySelector('.weather__humidity');
  const $lluvia = d.querySelector('.weather__rain');
  const $salidaSol = d.querySelector('.weather__sunrise');
  const $puestaSol = d.querySelector('.weather__sunset');

  // Esperamos la peticion
  const jsonInformacionCapital = await getInformacionCapital(capital);

  console.log(jsonInformacionCapital);
  const woeid = jsonInformacionCapital[0].woeid;
  console.log(woeid);


  // Esperamos la peticion
  const jsonClimaHoy = await getClimaHoyYPronostico(woeid);

  const simbolo = jsonClimaHoy.consolidated_weather[0].weather_state_abbr;
  const tempMax = jsonClimaHoy.consolidated_weather[0].max_temp;
  const tempMin = jsonClimaHoy.consolidated_weather[0].min_temp;
  const velocidadAire = jsonClimaHoy.consolidated_weather[0].wind_speed;
  const humedad = jsonClimaHoy.consolidated_weather[0].humidity;
  const probabilidadLluvia =
    jsonClimaHoy.consolidated_weather[0].predictability;
  let fecha = new Date(jsonClimaHoy.sun_rise);
  const salidaSol = fecha.toLocaleTimeString();
  fecha = new Date(jsonClimaHoy.sun_set);
  const puestaSol = fecha.toLocaleTimeString();

  $img.src = await getIconoClima(simbolo);
  $maximo.textContent = tempMax.toFixed() +'°';
  $minimo.textContent = tempMin.toFixed() +'°';
  $velocidadAire.textContent = velocidadAire.toFixed(1)+'mph';
  $humedad.textContent = humedad+'%';
  $lluvia.textContent = probabilidadLluvia+'%';
  $salidaSol.textContent = salidaSol;
  $puestaSol.textContent = puestaSol;
}
