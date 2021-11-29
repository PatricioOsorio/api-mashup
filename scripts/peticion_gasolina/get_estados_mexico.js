export default async function getEstadosMexico() {
  try {
    const url = `https://run.mocky.io/v3/4e29ea76-b60a-46d9-9a7e-f25a378885ea`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
