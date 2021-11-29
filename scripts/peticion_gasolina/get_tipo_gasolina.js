export default async function getTipoGasolina() {
  try {
    const url = `https://run.mocky.io/v3/c5ed565b-e530-451d-85f4-e5991e1fad69`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
