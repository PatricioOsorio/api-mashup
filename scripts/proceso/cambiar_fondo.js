import getImagen from '../peticion_otos/get_imagen.js';

export default async function cambiarFondo(estado, capital) {
  const url = await getImagen(`${(estado, capital)}`);

  const urlImage = url.photos[0].src.landscape;

  const htmlStyle = document.documentElement.style;

  htmlStyle.backgroundImage = `url('${urlImage}')`;
  htmlStyle.backgroundAttachment = 'fixed';
  htmlStyle.backgroundSize = 'cover';
}
