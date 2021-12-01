import mostrarCambioFondo from './mostrar_cambio_fondo.js';

const d = document;
export default async function mostrarGasolinas() {
  const $fuelResponse = d.querySelector('.fuel__response');
  const $iframe = document.createElement('iframe');
  
  const estadoAbreviado = d.querySelector('#formFuel__country').value;
  const tipoGasolina = d.querySelector('#formFuel__type').value;
  
  $fuelResponse.textContent='';
  
  // const estadoCompleto = d.querySelector('#formFuel__country').selectedOptions[0].text;

  $iframe.src = `https://petrointelligence.com/api/api_precios.html?consulta=estado&estado=${estadoAbreviado}&tipo=${tipoGasolina}`;
  $iframe.frameBorder = 0;
  $iframe.classList = 'fuel__iframe';

  // Se agrega a  al HTML
  $fuelResponse.appendChild($iframe);
}
