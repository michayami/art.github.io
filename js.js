let indice = 3;
const imagenes = document.querySelectorAll(".slider img");

function mostrarImagen(index) {
  imagenes.forEach(img => img.classList.remove("active"));
  imagenes[index].classList.add("active");
}

function moverSlide(direccion) {
  indice += direccion;
  if (indice >= imagenes.length) indice = 0;
  if (indice < 0) indice = imagenes.length - 1;
  mostrarImagen(indice);
}

// Cambio automático cada 3 segundos
setInterval(() => moverSlide(1), 3000);
