import getSimbolos from '../peticion_divisas/get_simbolos.js';

const d = document;
export default async function llenarFormDivisas() {
  const $monedaOrigen = d.querySelector('#formCurrency__from'); // Lista de moneda de origen
  const $monedaDestino = d.querySelector('#formCurrency__to'); // Lista de moneda de destino
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido

  // Esperamos la peticion
  const simbolos = await getSimbolos();

  // Llenado del "DropDown List" de las monedas
  Object.entries(simbolos.symbols).forEach(([llave, valor]) => {
    const moneda = valor.code;
    const descripcion = valor.description;
    const $option = d.createElement('option');

    $option.textContent = `${moneda} - ${descripcion}`;
    $option.value = moneda;

    $fragment.appendChild($option);
  });

  // Se clona el fragmento
  const $fragment2 = $fragment.cloneNode(true);

  // Se agregan al HTML
  $monedaOrigen.appendChild($fragment);
  $monedaDestino.appendChild($fragment2);
}
