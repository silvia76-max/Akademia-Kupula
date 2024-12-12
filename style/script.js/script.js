 
 
   document.getElementById('toggle-button').addEventListener('click', function () {
    const formulario = document.getElementById('formulario-registro');
   
    if (formulario.style.display === 'none' || formulario.style.display === '') {
      formulario.style.display = 'flex'; 
    } else {
      formulario.style.display = 'none'; 
    }
  });
  