export default async function getSimbolos() {
  try {
    const url = `https://api.exchangerate.host/symbols`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
