import getImagen from '../peticion_otos/get_imagen.js';

const d = document;
export default async function mostrarCambioFondo(busqueda) {
  const $heroImg = d.querySelector('.hero__img');

  const url = await getImagen(busqueda);
  const urlImage= url.photos[0].src.landscape;

  // console.log(urlImage);
  
  const htmlStyle = document.documentElement.style;
  
  $heroImg.style.backgroundImage = `url('${urlImage}')`;
  
  htmlStyle.backgroundImage = `url('${urlImage}')`;
  htmlStyle.backgroundAttachment = 'fixed';
  htmlStyle.backgroundSize = 'cover';
  htmlStyle.color = '#000';
}
