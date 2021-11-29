export default async function getInformacionCapital(capital) {
  try {
    const corsAnywhere = 'https://mycors-jailbase.herokuapp.com/';
    const url = `https://www.metaweather.com/api/location/search/?query=${capital}`;

    const res = await fetch(corsAnywhere + url);
    const json = await (res.ok ? res.json() : Promise.reject(res));

    return json;
  } catch (err) {
    const message = err.statusText || 'Ocurrio un error';
    console.error(`Failed Connection : ${err.status}: ${message}`);
  }
}
