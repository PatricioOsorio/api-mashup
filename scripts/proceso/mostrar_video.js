export default async function mostrarVideo(pais, capital) {
  const query = String(`noticias ${capital} ${pais}`);

  function authenticate() {
    return gapi.auth2.getAuthInstance().then(
      function () {
        console.log('1-Autenticacion correcta');
      },
      function (err) {
        console.error('1-Autenticacion incorrecta', err);
      }
    );
  }
  function loadClient() {
    gapi.client.setApiKey('AIzaSyAA1QVqRHsrxiM3xITE5YfPVw5GZ6x9E6s');
    return gapi.client
      .load('https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest')
      .then(
        function () {
          console.log('2-GAPI cliente cargado para API');
        },
        function (err) {
          console.error('2-Error al cargar el cliente GAPI para el API', err);
        }
      );
  }

  function execute() {
    return gapi.client.youtube.search
      .list({
        part: ['snippet'],
        maxResults: 2,
        q: query,
      })
      .then(
        function (response) {
          console.log('3-Respuesta', response);
          console.log(response.result.items[0].id.videoId);
          return response.result.items[0].id.videoId;
        },
        function (err) {
          console.error('3-Error de ejecucion', err);
        }
      );
  }
  gapi.load('client:auth2', function () {
    gapi.auth2.init({
      client_id:
        '747870625801-5rtl253orhjmjr59iria3ehl002ao23r.apps.googleusercontent.com',
    });
  });

  // Despues de 3 seg, se ejecuta la funcion de autenticar
  setTimeout(() => {
    authenticate().then(loadClient);
  }, 3000);
  
  // Despues de 5 seg, se busca el video y se inserta
  setTimeout(async () => {
    const idVideo = await execute();
    console.log('Mas cosas');

    const $video = document.querySelector('.video');
    const $iframe = document.createElement('iframe');

    $video.textContent = '';
    $video.style.backgroundColor = '#000';
    $iframe.src = `https://www.youtube.com/embed/${idVideo}`;
    $iframe.classList = 'iframe__video';
    $iframe.frameBorder = '0';

    // Se agrega al HTML
    $video.appendChild($iframe);
  }, 5000);
}
