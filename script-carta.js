// const abrirCartaBtn = document.getElementById('abrirCartaBtn');
// const sobreContenedor = document.querySelector('.sobre-contenedor');
// const carta = document.querySelector('.carta');

// abrirCartaBtn.addEventListener('click', () => {
//     sobreContenedor.classList.add('abierto');

//     // Opcional: Hacer la carta 'scrollable' solo después de abrir
//     // Esto previene que el scroll inicial afecte al layout antes de la animación
//     setTimeout(() => {
//         carta.style.overflowY = 'auto';
//     }, 1300); // Debe ser mayor que la duración de la transición de la carta + su delay
// });
  const params = new URLSearchParams(window.location.search);
  const para = params.get('para');
  
  if (para) {
    const nombre = para
      .replace(/-/g, " ")
      .replace(/\b\w/g, letra => letra.toUpperCase());
    document.getElementById("nombre-destinatario").textContent = nombre;
  }