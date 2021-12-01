import getBuscarCapital from '../peticion_clima/get_buscar_capital.js';

const d = document;

export default async function llenarFormClimaCapital(e) {
  const $capital = d.querySelector('#formWeather__capital'); // Lista para llenar
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido

  // Se obtiene el pais seleccionado del HTML
  const paisSeleccionado = e.target.value;

  // Se limpia la lista
  $capital.textContent = '';

  // Esperamos la peticion
  const jsonCapital = await getBuscarCapital(paisSeleccionado);

  // Obtenemos el nombre de la capital
  const capital = jsonCapital.data.capital;

  // Mensaje para seleccionar opcion
  let $option = d.createElement('option');
  $option.textContent = '-Seleccione opcion';
  $option.value = undefined;
  $fragment.appendChild($option);

  // Llenado con la capital
  $option = d.createElement('option');
  $option.textContent = capital;
  $option.value = capital;

  // Se agregan al fragmento
  $fragment.appendChild($option);

  // Se agregan al HTML
  $capital.appendChild($fragment);
}
