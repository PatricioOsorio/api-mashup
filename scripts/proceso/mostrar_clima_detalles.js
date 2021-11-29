import getClimaHoyYPronostico from '../peticion_clima/get_clima_hoy_y_pronostico.js';
import getInformacionCapital from '../peticion_clima/get_informacion_capital.js';
import getIconoClima from '../peticion_clima/get_icono_clima.js';

const d = document;
export default async function mostrarClimaDetalles() {
  const $weatherModal = d.querySelector('.weatherModal');
  let $fragment = d.createDocumentFragment(); // Fragmento para ser llenado
  const $template = d.querySelector('.template-cardWeather').content; // Template HTML

  const capital = d.querySelector('#formWeather__capital').value;

  // Esperamos la peticion
  const jsonInformacionCapital = await getInformacionCapital(capital);
  const woeid = jsonInformacionCapital[0].woeid;

  // Esperamos la peticion
  const jsonClimaHoy = await getClimaHoyYPronostico(woeid);

  const jsonDias = jsonClimaHoy.consolidated_weather;

  //  Se limpia la modal
  $weatherModal.classList.remove('hidden');

  $weatherModal.innerHTML = `
  <a class="weatherModal__close">
    <i class="fas fa-times"></i>
  </a>`;

  for (const el of jsonDias) {
    const detalles = el.weather_state_name;
    const fecha = el.applicable_date;
    const simbolo = el.weather_state_abbr;
    const tempMax = el.max_temp;
    const tempMin = el.min_temp;
    const velocidadAire = el.wind_speed;
    const humedad = el.humidity;
    const probabilidadLluvia = el.predictability;

    const imgSimbolo = await getIconoClima(simbolo);

    $template.querySelector('.cardWeather__detail').textContent = detalles;
    $template.querySelector('.cardWeather__date').textContent = fecha;
    $template.querySelector('.cardWeather__img').src = imgSimbolo;
    $template.querySelector('.cardWeather__temperatureMax').textContent =
      tempMax.toFixed() + '°';
    $template.querySelector('.cardWeather__temperatureMin').textContent =
      tempMin.toFixed() + '°';
    $template.querySelector('.cardWeather__wind').textContent =
      velocidadAire.toFixed(1) + 'mph';
    $template.querySelector('.cardWeather__humidity').textContent =
      humedad + '%';
    $template.querySelector('.cardWeather__rain').textContent =
      probabilidadLluvia + '%';

    let $clone = d.importNode($template, true);

    // El contenido clonado, se agrega al "fragment"
    $fragment.appendChild($clone);
  }

  // Se clona, para poder ser agregado
  console.log($fragment);

  // El "fragment" se agrega al HTML, para ser visualizado
  $weatherModal.appendChild($fragment);
}
