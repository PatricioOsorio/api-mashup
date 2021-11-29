import getConvertirDivisa from '../peticion_divisas/get_convertir_divisa.js';

const d = document;
export default async function mostrarCambioDivisa() {
  const $cantidad = d.querySelector('#formCurrency__amount').value;
  const $origen = d.querySelector('#formCurrency__from').value;
  const $destino = d.querySelector('#formCurrency__to').value;

  const $resultado = d.querySelector('.currency__response');

  
  // Esperamos la respuesta de la peticion
  const jsonDivisa = await getConvertirDivisa($cantidad, $origen, $destino);
  
  const equivalencia = jsonDivisa.result;
  
  $resultado.classList.remove('hidden');
  $resultado.querySelector('.response__result').textContent = equivalencia;
  $resultado.querySelector('.response__amount').textContent = $cantidad;
  $resultado.querySelector('.response__from').textContent = $origen;
  $resultado.querySelector('.response_to').textContent = $destino;
  $resultado.querySelector('.response_date').textContent = jsonDivisa.date;
}
