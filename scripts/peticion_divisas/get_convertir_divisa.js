export default async function getConvertirDivisa(
  cantidad,
  simboloOrigen,
  simboloEquivalente
) {
  try {
    const url = `https://api.exchangerate.host/convert?from=${simboloOrigen}&to=${simboloEquivalente}&amount=${cantidad}`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
