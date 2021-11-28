import getEstadosMexico from '../peticion_gasolina/get_estados_,mexico.js';
import getTipoGasolina from '../peticion_gasolina/get_tipo_gasolina.js';

const d = document;

export default async function llenarFormGasolinas() {
  const $estado = d.querySelector('#formFuel__country');
  const $tipoGasolina = d.querySelector('#formFuel__type');
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido
  const $fragment2 = d.createDocumentFragment(); // Fragmento para guardar el contenido

  const jsonEstados = await getEstadosMexico(); // Peticion, estados de mexico
  const jsonTipoGasolinas = await getTipoGasolina(); // Peticion, tipo de gasolina

  // Se llena la lista de "Estados"
  jsonEstados.forEach((el) => {
    const $option = d.createElement('option');

    $option.textContent = el.estado;
    $option.value = el.abreviacion;

    $fragment.appendChild($option);
  });

  // Se llena la lista de "Tipo de gasolina"
  jsonTipoGasolinas.forEach((el) => {
    const $option = d.createElement('option');

    $option.textContent = el.descripcion;
    $option.value = el.abreviacion;

    $fragment2.appendChild($option);
  });

  // Se agregan al HTML
  $estado.appendChild($fragment);
  $tipoGasolina.appendChild($fragment2);
}
