// JavaScript para manejar el menú hamburguesa
const hamburgerButton = document.getElementById('hamburgerButton');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alternamos la clase activa
});



