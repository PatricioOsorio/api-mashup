import getSimbolos from '../peticion_divisas/get_simbolos.js';

const d = document;
export default async function mostrarSimbolos() {
  const $monedaOrigen = d.querySelector('#formCurrency__from');
  const $monedaDestino = d.querySelector('#formCurrency__to');
  const $fragment = d.createDocumentFragment(); // Fragmento para guardar el contenido

  const simbolos = await getSimbolos();

  Object.entries(simbolos.symbols).forEach(([llave, valor]) => {
    const moneda = valor.code;
    const descripcion = valor.description;
    const $option = d.createElement('option');

    $option.textContent = `${moneda} - ${descripcion}`;
    $option.value = moneda;

    $fragment.appendChild($option);
  });

  const $fragment2 = $fragment.cloneNode(true);

  $monedaOrigen.appendChild($fragment);
  $monedaDestino.appendChild($fragment2);
}
