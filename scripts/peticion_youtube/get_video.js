export default async function getVideoYoutube(idVideo, lugar) {
  const $div = document.querySelector(lugar);
  const $iframe = document.createElement('iframe');
  $iframe.src = `https://www.youtube.com/embed/${idVideo}`;
  $div.appendChild($iframe);
}