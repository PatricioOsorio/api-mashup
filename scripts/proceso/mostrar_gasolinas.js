import getEstadosMexico from '../peticion_gasolina/get_estados_,mexico.js';
import getTipoGasolina from '../peticion_gasolina/get_tipo_gasolina.js';
// import postEstados from '../peticion_otos/post_estados.js';

const d = document;

export default async function mostrarGasolinas() {
  const $estado = d.querySelector('#formFuel__country');
  const $tipo = d.querySelector('#formFuel__type');
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido
  const $fragment2 = d.createDocumentFragment(); // Fragmento para guardar el contenido

  const jsonEstados = await getEstadosMexico();

  jsonEstados.forEach((el) => {
    const $option = d.createElement('option');

    $option.textContent = el.estado;
    $option.value = el.abreviacion;

    $fragment.appendChild($option);
  });

  const jsonGasolinas = await getTipoGasolina();
  

  jsonGasolinas.forEach((el) => {
    const $option = d.createElement('option');

    $option.textContent = el.descripcion;
    $option.value = el.abreviacion;

    $fragment2.appendChild($option);
  });

  $estado.appendChild($fragment);
  $tipo.appendChild($fragment2);
}
