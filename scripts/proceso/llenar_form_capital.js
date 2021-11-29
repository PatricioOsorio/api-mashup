import getBuscarCapital from '../peticion_clima/get_buscar_capital.js';

const d = document;

export default async function llenarFormCapital(e) {
  const $capital = d.querySelector('#formWeather__capital'); // Lista para llenar
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido

  const paisSeleccionado = e.target.value;

  $capital.textContent = '';

  // Esperamos la peticion
  const jsonCapital = await getBuscarCapital(paisSeleccionado);

  const capital = jsonCapital.data.capital;

  // Mensaje para seleccionar opcion
  let $option = d.createElement('option');
  $option.textContent = '-Seleccione opcion';
  $option.value = undefined;
  $fragment.appendChild($option);

  // Llenado con el capital
  $option = d.createElement('option');
  $option.textContent = capital;
  $option.value = capital;

  $fragment.appendChild($option);

  // Se agregan al HTML
  $capital.appendChild($fragment);
}
