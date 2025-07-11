function mostrarPoema() {
  const poema = document.getElementById("poema");
  const musica = document.getElementById("musica");

  if (poema && musica) {
    poema.style.display = "block";
    musica.play();
  } else {
    console.log("Algo no se encontró: poema o música");
  }
}
