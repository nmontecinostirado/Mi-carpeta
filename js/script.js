// js/script.js

document.addEventListener("DOMContentLoaded", function() {

  console.log('Proyecto cargado ✓');

  const botonArriba = document.getElementById("btnArriba");
  if (!botonArriba) return;

  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      botonArriba.classList.add("show");
    } else {
      botonArriba.classList.remove("show");
    }
  });

  botonArriba.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});
