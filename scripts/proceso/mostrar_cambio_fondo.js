import getImagen from '../peticion_otos/get_imagen.js';

const d = document;
export default async function mostrarCambioFondo(estado, capital) {
  const $heroImg = d.querySelector('.hero__img');

  const url = await getImagen(`${(estado, capital)}`);
  const urlImage= url.photos[0].src.landscape;

  const htmlStyle = document.documentElement.style;
  
  $heroImg.style.backgroundImage = `url('${urlImage}')`;
  
  htmlStyle.backgroundImage = `url('${urlImage}')`;
  htmlStyle.backgroundAttachment = 'fixed';
  htmlStyle.backgroundSize = 'cover';
  htmlStyle.color = '#000';
}
