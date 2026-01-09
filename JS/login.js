// ----------- DATOS LOGIN

const user = document.querySelector('#input-email');
const pass = document.querySelector('#password-input-email');
const form = document.querySelector('#login-form');

// USUARIOS QUE PUEDEN INGRESAR
const usuario = "usuario@gmail.com";
const contrasena = "123";

// VERIFICAMOS QUE SI ESTE LOGUEADO Y REDIRIGIMOS
if (sessionStorage.getItem("logueado") === "true") {
  window.location.href = "./home.html";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (user.value === "" || pass.value === "") {
    alert("Completa todos los campos");
    return;
  }

  if (user.value === usuario && pass.value === contrasena) {
    sessionStorage.setItem("logueado", "true");
    window.location.href = "./home.html";
  } else {
    alert("Credenciales incorrectas");
  }
});

