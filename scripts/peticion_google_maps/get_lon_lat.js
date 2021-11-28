export default async function getLongitudYLatitud(pais, estado, ciudad) {
  try {
    const url = `http://api.positionstack.com/v1/forward?access_key=8daa045d98d8f2c6a1f07a66d1904f12&country=${pais}&region=${estado}&query=${ciudad}/`;

    const res = await fetch(url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
