import getImagen from '../peticion_otos/get_imagen.js';

const d = document;
export default async function mostrarCambioFondo(busqueda) {
  const $heroImg = d.querySelector('.hero__img');

  // Peticion, para obtener la image
  const url = await getImagen(busqueda);

  //Se guarda la url de la imagen
  const urlImage= url.photos[0].src.landscape;
  
  // Se crear constante para cambiar el fondo del HTML
  const htmlStyle = document.documentElement.style;
  
  // Se cambia el fondo
  $heroImg.style.backgroundImage = `url('${urlImage}')`;
  htmlStyle.backgroundImage = `url('${urlImage}')`;
  htmlStyle.backgroundAttachment = 'fixed';
  htmlStyle.backgroundSize = 'cover';
  htmlStyle.color = '#000';
}
