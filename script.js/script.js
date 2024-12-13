document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.getElementById("login-button");
  const loginForm = document.getElementById("login-form");

  loginButton.addEventListener("click", () => {
      loginForm.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
      if (!loginForm.contains(event.target) && !loginButton.contains(event.target)) {
          loginForm.classList.add("hidden");
      }
  });
}); 
 
   document.getElementById('toggle-button').addEventListener('click', function () {
    const formulario = document.getElementById('formulario-registro');
   
    if (formulario.style.display === 'none' || formulario.style.display === '') {
      formulario.style.display = 'flex'; 
    } else {
      formulario.style.display = 'none'; 
    }
  });
  