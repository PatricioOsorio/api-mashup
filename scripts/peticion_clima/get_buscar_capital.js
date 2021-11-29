export default async function getBuscarCapital(pais) {
  try {
    const opciones = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        country: pais,
      }),
      redirect: 'follow',
    };

    const url = `https://countriesnow.space/api/v0.1/countries/capital`;

    const res = await fetch(url, opciones);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
