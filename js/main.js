// ---- reloj en tiempo real ----

// busco el elemento donde voy a mostrar la hora
const reloj = document.getElementById("reloj");

function actualizarReloj() {
  const ahora = new Date();

  // formato HH:MM:SS con ceros a la izquierda
  const horas   = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");

  if (reloj) {
    reloj.textContent = `${horas}:${minutos}:${segundos}`;
  }
}

// arranco de una y luego actualizo cada segundo
actualizarReloj();
setInterval(actualizarReloj, 1000);


// ---- guardar el formulario en localStorage ----

const form = document.getElementById("form-contacto");

if (form) {
  // campos que quiero guardar automáticamente
  const camposGuardar = ["nombre", "correo", "telefono", "asunto", "mensaje"];

  // al cargar la página intento recuperar lo que había escrito
  camposGuardar.forEach(function (id) {
    const campo = document.getElementById(id);
    const valorGuardado = localStorage.getItem("contacto_" + id);

    if (campo && valorGuardado) {
      campo.value = valorGuardado;
    }
  });

  // guardo cada vez que el usuario escribe o cambia algo
  camposGuardar.forEach(function (id) {
    const campo = document.getElementById(id);

    if (campo) {
      campo.addEventListener("input", function () {
        localStorage.setItem("contacto_" + id, campo.value);
      });
    }
  });

  // cuando envía el form limpio todo lo guardado
  form.addEventListener("submit", function () {
    camposGuardar.forEach(function (id) {
      localStorage.removeItem("contacto_" + id);
    });
  });

  // cuando limpia el form con el botón reset también borro el storage
  form.addEventListener("reset", function () {
    camposGuardar.forEach(function (id) {
      localStorage.removeItem("contacto_" + id);
    });
  });
}
