import getLongitudYLatitud from '../peticion_google_maps/get_lon_lat.js';
import getCsv from '../peticion_google_maps/get_csv.js';

export default async function mostrarMapa(pais, capital) {
  // Peticion para obtener el codigo Csv de los paises
  const jsonCsv = await getCsv();

  // Se obtiene el codigo csv del pais seleccionado
  let paisCsv;
  jsonCsv.forEach((el) => {
    if (el.country === pais) {
      paisCsv = el.csv;
    }
  });

  // Peticion para obtener la longitud y latitud
  const jsonLongitudYLatitud = await getLongitudYLatitud(paisCsv, capital, capital);

  // Se guarda en variables el resultado
  const latitud = jsonLongitudYLatitud.data[0].latitude;
  const longitud = jsonLongitudYLatitud.data[0].longitude;

  // Muestra el mapa en el HTML, con la longitud y latitud
  let map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: Number(latitud), lng: Number(longitud) },
    zoom: 7,
  });
}
