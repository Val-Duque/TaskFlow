// ----------- DATOS LOGIN
const user = document.querySelector('#input-email');
const pass = document.querySelector('#password-input-email');

const usuario = 'user';
const contrasena = '123';

function Ingresar() {

  if (user.value === usuario && pass.value === contrasena) {
    alert("Bienvenido, has iniciado sesion correctamente")
    window.location.href = "./home.html";
  } else {
    alert("Credenciales incorrectas");
  }
}


// ---------- CALENDARIO
flatpickr("#calendar", {
            inline: true,
            dateFormat: "Y-m-d"
        });

// ---------- TEMA HOME
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-bs-theme");
    document.documentElement.setAttribute(
    "data-bs-theme",
    current === "dark" ? "light" : "dark"
    );
});

