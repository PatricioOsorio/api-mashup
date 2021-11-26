export default async function getGasolina(estado, tipoGasolina, lugarInsetar) {
  const $div = document.querySelector(lugarInsetar);
  const $iframe = document.createElement('iframe');
  $iframe.src = `https://petrointelligence.com/api/api_precios.html?consulta=nac&estado=${estado}&tipo=${tipoGasolina}`;
  $iframe.frameBorder = 0;
  $iframe.classList='fuel__content';
  $div.appendChild($iframe);
}
