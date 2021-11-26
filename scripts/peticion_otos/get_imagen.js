export default async function getImagen(busqueda) {
  try {
    const opciones = {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer 563492ad6f91700001000001ff5c7cf0b2824ef8931429ce37f0c65e',
      },
    };

    const url = `https://api.pexels.com/v1/search?query=${busqueda}&orientation=landscape&per_page=1`;

    const res = await fetch(url, opciones);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
