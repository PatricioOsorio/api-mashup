export default async function getPaisesYCapital() {
  try {
    const url = `https://countriesnow.space/api/v0.1/countries/capital`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
