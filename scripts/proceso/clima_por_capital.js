import getPaisesYBandera from '../peticion_otos/get_paises_y_bandera.js';

const d = document;
export default async function climaPorCapital() {
  const $pais = d.querySelector('#formWeather__country'); // Lista para llenar
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido

  // Esperamos la peticion
  const jsonPaisYBandera = await getPaisesYBandera();

  // Obtener Paises
  const paises = [];
  jsonPaisYBandera.data.forEach((el) => {
    paises.push(el.name);
  });

  // Llenado con los paises
  paises.forEach((el) => {
    const $option = d.createElement('option');

    $option.textContent = el;
    $option.value = el;

    $fragment.appendChild($option);
  });

  // Se agregan al HTML
  $pais.appendChild($fragment);
}
