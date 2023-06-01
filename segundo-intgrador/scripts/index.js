const form = document
  .getElementById("form")
  .addEventListener("submit", mostrarPrecio);
const borrar = document.getElementById("borrar").addEventListener("click", borrarPrecio);

function getInfo() {
  const form = document.forms[0];
  const info = {
    nombre: form.elements.nombre.value,
    apellido: form.elements.apellido.value,
    email: form.elements.email.value,
    cantidad: form.elements.cantidad.value,
    categoria: form.elements.categoria.value,
  };
  return info;
}

function calcular() {
  const data = getInfo();

  let porcentaje;
  switch (data.categoria) {
    case "estudiante":
      porcentaje = 80;
      break;
    case "trainee":
      porcentaje = 50;
      break;
    case "junior":
      porcentaje = 15;
      break;
  }
  let precio = (200 * data.cantidad * porcentaje) / 100;
  return precio;
}

function mostrarPrecio(e) {
  e.preventDefault();
  const precio = calcular();
  document.getElementById(
    "precio"
  ).innerHTML = `El total a pagar es $${precio}`;
}

function borrarPrecio() {
  document.getElementById("precio").innerHTML = `El total a pagar es $`
}
