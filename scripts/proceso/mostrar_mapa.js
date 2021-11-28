import getInformacionCapital from '../peticion_clima/get_informacion_capital.js';

export default async function mostrarMapa(capital) {
  const $map = document.querySelector('.map');

  const jsonInformacionCapital = await getInformacionCapital(capital);
  const [latitud, longitud] = jsonInformacionCapital[0].latt_long.split(',');
  console.log(latitud, longitud);

  $map.textContent = '';
  const $iframe = document.createElement('iframe');
  $iframe.src = `https://maps.google.com/?q=${latitud},${longitud}&output=embed`;
  $iframe.classList = 'iframe__map';
  $iframe.frameBorder='0'
  $map.appendChild($iframe);


}