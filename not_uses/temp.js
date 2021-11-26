import getPaises from './peticiones/get_paises.js'; // Obtener paises
import postEstados from './peticiones/post_estados.js'; // Obtener estados
import postCiudades from './peticiones/post_ciudades.js'; // Obtener ciudades
import getLongitudYLatitud from './peticiones/get_lon_lat.js'; // Obtener longitud y latitud

// ? Obtener Paises
// const jsonPaises = await getPaises();
// jsonPaises.data.forEach((el) => {
//   console.log(el.name);
//   console.log(el.Iso2);
// });

// ? Obtener estados
// const jsonEstados = await postEstados('Mexico');
// jsonEstados.data.states.forEach((el) => {
//   console.log(el.name);
// });

// ? Obtener ciudades
// @ pais = necesita el string
// @ estados = necesita el string
// const jsonCiudades = await postCiudades('Mexico', 'Puebla');
// jsonCiudades.data.forEach((el) => {
//   console.log(el);
// })

// ? Obtener Longitud y latitud
// @ pais = necesita iso2
// @ estados = necesita el string
// @ ciudad = necesita el string
// const jsonLonLat = await getLongitudYLatitud('Mx', 'Puebla', 'Chilchotla');
// const longitud = jsonLonLat.data[0].latitude; 19.25432
// const latitud = jsonLonLat.data[0].longitude; -97.182421
// console.log(longitud, latitud);
