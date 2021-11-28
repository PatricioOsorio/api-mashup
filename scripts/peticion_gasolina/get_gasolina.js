const d = document;
export default async function getGasolina(estado, tipoGasolina) {
  const $fuelResponse = d.querySelector('.fuel__response');
  const $iframe = document.createElement('iframe');

  $fuelResponse.textContent='';
  
  $iframe.src = `https://petrointelligence.com/api/api_precios.html?consulta=estado&estado=${estado}&tipo=${tipoGasolina}`;
  $iframe.frameBorder = 0;
  $iframe.classList = 'fuel__iframe';

  // Se agrega a la 
  $fuelResponse.appendChild($iframe);
}
