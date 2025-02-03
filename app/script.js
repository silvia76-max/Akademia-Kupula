// JavaScript para manejar el menú hamburguesa
const hamburgerButton = document.getElementById('hamburgerButton');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alternamos la clase activa
});

//script para el popup de whatsapp

document.addEventListener("DOMContentLoaded", function () {
  const whatsappIcon = document.getElementById("whatsappIcon");
  const whatsappPopup = document.getElementById("whatsappPopup");
  const overlay = document.getElementById("overlay");
  const closePopup = document.getElementById("closePopup");

  // Mostrar el popup
  whatsappIcon.addEventListener("click", function () {
    whatsappPopup.classList.add("active");
    overlay.style.display = "block";
  });

  // Cerrar el popup con la "X"
  closePopup.addEventListener("click", function () {
    whatsappPopup.classList.remove("active");
    overlay.style.display = "none";
  });

  // Cerrar el popup haciendo clic fuera
  overlay.addEventListener("click", function () {
    whatsappPopup.classList.remove("active");
    overlay.style.display = "none";
  });
});
 // script usuario

 document.getElementById("userIcon").addEventListener("click", function () {
  document.getElementById("loginForm").classList.toggle("show");
});

document.getElementById("closeForm").addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe
  document.getElementById("loginForm").classList.remove("show");
});

// También cerrar el formulario si se hace clic fuera de él
document.addEventListener("click", function (event) {
  const form = document.getElementById("loginForm");
  const userIcon = document.getElementById("userIcon");

  if (!form.contains(event.target) && event.target !== userIcon) {
      form.classList.remove("show");
  }
});
