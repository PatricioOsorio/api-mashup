import getLongitudYLatitud from '../peticion_google_maps/get_lon_lat.js';
import getCsv from '../peticion_google_maps/get_csv.js';

export default async function mostrarMapa(pais, capital) {
  const jsonCsv = await getCsv();

  let paisCsv;
  jsonCsv.forEach((el) => {
    if (el.country === pais) {
      paisCsv = el.csv;
    }
  });

  const jsonLongitudYLatitud = await getLongitudYLatitud(paisCsv, capital, capital);

  const latitud = jsonLongitudYLatitud.data[0].latitude;
  const longitud = jsonLongitudYLatitud.data[0].longitude;

  let map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: Number(latitud), lng: Number(longitud) },
    zoom: 7,
  });
}
