import getPaisesYCapital from './peticion_otos/get_paises_y_capital.js';
import getBuscarCapital from './peticion_clima/get_buscar_capital.js';
import getClimaHoyYPronostico from './peticion_clima/get_clima_hoy_y_pronostico.js';
import getIconoClima from './peticion_clima/get_icono_clima.js';
import getImagen from './peticion_otos/get_imagen.js';
import getVideoYoutube from './peticion_youtube/get_video.js';
import getGasolina from './peticion_gasolina/get_gasolina.js';
import getConvertirDivisa from './peticion_divisas/get_convertir_divisa.js';

import darkMode from './dark_mode.js';

const d = document;
d.addEventListener('DOMContentLoaded', async (e) => {
  darkMode();
  // ? Obtener paises y capital
  // const jsonPaisYCapital = await getPaisesYCapital();
  // console.log(jsonPaisYCapital.data);

  // ? Icono - Estado metereologico
  // const ico = getIconoClima('lr');
  // console.log(ico);

  // ? Obtener informacion de capital
  // const jsonInformacionCapital = await getBuscarCapital('Mexico City');
  // const titulo = jsonInformacionCapital[0].title;
  // const woeid = jsonInformacionCapital[0].woeid;
  // const [latitud, lontidud] = jsonInformacionCapital[0].latt_long.split(',');

  // ? Obtener informacion de capital (hoy y pronostico)
  // const jsonInformacionHoy = await getClimaHoyYPronostico('116545');
  // console.log(jsonInformacionHoy);

  // ? Obtener imagen
  // @ busqueda = Descripcion de busqueda
  // const jsonImagen = await getImagen('Puebla mexico');
  // console.log(jsonImagen);
  // console.log(jsonImagen.photos[0].src.landscape);

  // ? Mostrar video de youtube
  // getVideoYoutube('xYe63J5Mjic','#video');

  // ? Precio gasolinas
  // getGasolina('PUE', 'REG', '#fuel');

  // ? Conversor divisas
  // const jsonConversorDivisa = await getConvertirDivisa('100', 'MXN', 'USD');
  // const resultado = jsonConversorDivisa.result;
  // const fecha = jsonConversorDivisa.date;
});
