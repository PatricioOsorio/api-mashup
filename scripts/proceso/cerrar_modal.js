export default function cerrarModal() {
  // Se obtiene la ventana modal del HTML
  const $weatherModal = document.querySelector('.weatherModal');

  // Se cierra la ventana modal
  $weatherModal.classList.add('hidden');
}
