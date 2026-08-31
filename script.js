// Aquí va toda la lógica interactiva de la página

console.log("PLAYPKM cargado correctamente ✅");

// --- Carrusel de pantallas del teléfono (minijuegos) ---

const pantallas = document.querySelectorAll(".phone-slide");
const flechaSiguiente = document.getElementById("siguienteMinijuego");
const flechaAnterior = document.getElementById("anteriorMinijuego");

let indiceActual = 0;

flechaSiguiente.addEventListener("click", () => {
  pantallas[indiceActual].classList.remove("active");

  indiceActual = (indiceActual + 1) % pantallas.length;

  pantallas[indiceActual].classList.add("active");
});

flechaAnterior.addEventListener("click", () => {
  pantallas[indiceActual].classList.remove("active");

  indiceActual = (indiceActual - 1 + pantallas.length) % pantallas.length;

  pantallas[indiceActual].classList.add("active");
});