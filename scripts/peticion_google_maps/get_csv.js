export default async function getCsv() {
  try {
    const url = `https://run.mocky.io/v3/bc1b2978-022c-4852-b311-fee6e0aba2db`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
