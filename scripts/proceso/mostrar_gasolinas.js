import mostrarCambioFondo from './mostrar_cambio_fondo.js';

const d = document;
export default async function mostrarGasolinas() {
  const $fuelResponse = d.querySelector('.fuel__response');
  const $iframe = document.createElement('iframe');

  // Se obtiene el Estado (Abreviado)
  const estadoAbreviado = d.querySelector('#formFuel__country').value;
  // Se obtiene el Tipo de gasolina
  const tipoGasolina = d.querySelector('#formFuel__type').value;

  // Se limpia el campo
  $fuelResponse.textContent = '';

  // Se obtiene el iframe
  $iframe.src = `https://petrointelligence.com/api/api_precios.html?consulta=estado&estado=${estadoAbreviado}&tipo=${tipoGasolina}`;
  $iframe.frameBorder = 0;
  $iframe.classList = 'fuel__iframe';

  // Se agrega a  al HTML
  $fuelResponse.appendChild($iframe);
}
