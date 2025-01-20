 // JavaScript para manejar el despliegue del formulario
 const toggleButton = document.getElementById('toggleButton');
 const formContainer = document.getElementById('formContainer');

 toggleButton.addEventListener('click', () => {
     if (formContainer.style.display === 'none' || formContainer.style.display === '') {
         formContainer.style.display = 'block';
         toggleButton.textContent = 'Ocultar Formulario';
     } else {
         formContainer.style.display = 'none';
         toggleButton.textContent = 'Registrate';
     }
 });
  
  //menu hamburguesa
  document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});
