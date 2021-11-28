// Peticiones
import getPaisesYCapital from './peticion_otos/get_paises_y_capital.js';
import getInformacionCapital from './peticion_clima/get_informacion_capital.js';
import getClimaHoyYPronostico from './peticion_clima/get_clima_hoy_y_pronostico.js';
import getIconoClima from './peticion_clima/get_icono_clima.js';
import getImagen from './peticion_otos/get_imagen.js';
import getVideoYoutube from './peticion_youtube/get_video.js';
import getGasolina from './peticion_gasolina/get_gasolina.js';
import getConvertirDivisa from './peticion_divisas/get_convertir_divisa.js';

// Proceso
import climaPorCapital from './proceso/clima_por_capital.js';
import buscarCapital from './proceso/buscar_capital.js';
import llenarClima from './proceso/llenar_clima.js';
import cambiarFondo from './proceso/cambiar_fondo.js';
// import convertirDivisa from './proceso/divisas.js';
import mostrarSimbolos from './proceso/mostrar_simbolos.js';
import mostrarGasolinas from './proceso/mostrar_gasolinas.js';
import mostrarVideo from './proceso/mostrar_video.js';
import mostrarMapa from './proceso/mostrar_mapa.js';
import converitrDivisas from './proceso/convertir_divisas.js';
import procesoGasolinas from './proceso/proceso_gasolinas.js';

const d = document;
d.addEventListener('DOMContentLoaded', async (e) => {
  // ? Obtener paises y capital
  climaPorCapital();

  // ? Mostrar simbolos "Conversor"
  mostrarSimbolos();

  // ? Mostrar gasolinas
  mostrarGasolinas();
});

// Evento para detectar un cambio de un "Dropdown List"
d.addEventListener('change', (e) => {
  const $climaPais = d.querySelector('#formWeather__country');

  if (e.target === $climaPais) buscarCapital(e);
});

// Evento cuadno se presione un boton de formulario
d.addEventListener('submit', async (e) => {
  e.preventDefault();

  const $formWeather = d.querySelector('.formWeather');
  const $formCurrency = d.querySelector('.formCurrency');
  const $formFuel = d.querySelector('.formFuel');


  // Cuando presione boton del formulario "Weather"
  if (e.target === $formWeather) {
    const estado = $formWeather.querySelector('#formWeather__country').value;
    const capital = $formWeather.querySelector('#formWeather__capital').value;
    console.log(estado, capital);
    llenarClima(capital);
    cambiarFondo(estado, capital);
    mostrarVideo('sadFM2Qi0wc');
    mostrarMapa(capital);
  }
  
  // Cuando presione boton del formulario "Currency"
  if (e.target === $formCurrency) {
    converitrDivisas();
  }

  // Cunado se presion boton de "Fuel"
  if (e.target === $formFuel) {
    procesoGasolinas()
  }
});
