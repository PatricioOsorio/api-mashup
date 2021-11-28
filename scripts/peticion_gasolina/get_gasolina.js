const d = document;
export default async function getGasolina(estado, tipoGasolina) {
  const $fuelResponse = d.querySelector('.fuel__response');
  $fuelResponse.textContent='';
  const $iframe = document.createElement('iframe');
  $iframe.src = `https://petrointelligence.com/api/api_precios.html?consulta=estado&estado=${estado}&tipo=${tipoGasolina}`;
  // $iframe.src = `https://petrointelligence.com/api/api_precios.html?&estado=${estado}&tipo=${tipoGasolina}`;
  $iframe.frameBorder = 0;
  $iframe.classList = 'fuel__content';
  $fuelResponse.appendChild($iframe);
}
