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



function Guardar() {
    // seleciono contenedor padre
    const contenedorPadre = document.querySelector('#contenedor-padre-tareas')

    // creo el nodo hijo
    const hijoPadre = document.createElement('p')
    hijoPadre.innerHTML = `<div class="col-6 cardCard"> 
                            <section class="card">
                                <div class="card-body">
                                    <header class="d-flex">
                                        <input class="form-check-input" type="radio" name="radioDefault">
                                        <h6 class="card-title ms-3">Dental Appointment</h6>
                                    </header>
                                    <p class="card-text">Details: dental cleaning 9:30am</p>
                                    <p class="card-text">Date: 10/01/2026</p>
                                    <p>Priority:<span class="btn badge ms-1 p-1 btn-primary">Low</button>
                                    <p>Category:<span class="btn badge ms-1 p-1 btn-info">Reminder</button>
                                    <p>Status:<span class="btn badge ms-1 p-1 btn-danger">Pending</class=></span></p>
                                </div>
                            </section>
                        </div>`

    // imprimo
    contenedorPadre.append(hijoPadre)
}


//ELIMINAR TAREAS
document.addEventListener("DOMContentLoaded", () => {
    asignarEventosEliminar();
});
function asignarEventosEliminar() {
    const btnDelete = document.querySelectorAll(".deleteToggle");

    btnDelete.forEach(btn => {
        btn.addEventListener("click", function ()  {
           if (confirm("¿Seguro que quieres eliminar la tarea?")) {
                    this.closest(".card").remove(); 
                }
        });
    });

}