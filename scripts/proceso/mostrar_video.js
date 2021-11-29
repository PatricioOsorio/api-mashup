export default async function mostrarVideo(idVideo) {
  const $video = document.querySelector('.video');
  const $iframe = document.createElement('iframe');

  $video.textContent = '';
  $video.style.backgroundColor = '#000'
  $iframe.src = `https://www.youtube.com/embed/${idVideo}`;
  $iframe.classList = 'iframe__video';
  $iframe.frameBorder='0';

  // Se agrega al HTML
  $video.appendChild($iframe);
}