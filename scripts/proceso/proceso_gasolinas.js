import getGasolina from '../peticion_gasolina/get_gasolina.js';

const d = document;
export default async function procesoGasolinas() {
  const $estado = d.querySelector('#formFuel__country').value;
  const $tipo = d.querySelector('#formFuel__type').value;
  getGasolina($estado, $tipo);
}
