export default async function mostrarVideo(idVideo) {
  const $video = document.querySelector('.video');

  $video.textContent = '';
  const $iframe = document.createElement('iframe');
  $iframe.src = `https://www.youtube.com/embed/${idVideo}`;
  $iframe.classList = 'iframe__video';
  $iframe.frameBorder='0'
  $video.appendChild($iframe);

}