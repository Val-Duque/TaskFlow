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
// ---------- GUARDAR TAREA
function Guardar() {
  localStorage.setItem('taskTitle', document.getElementById('taskTitle').value);
  // localStorage.getItem('taskTitle');

  if (validateTaskInput()) {
    const contenedorPadre = document.querySelector('#contenedor-padre-tareas')
    const hijoPadre = document.createElement('p')

    hijoPadre.innerHTML = `<div class="col-6 cardCard"> 
                            <section class="card">
                                <div class="card-body">
                                    <header class="d-flex">
                                        <input class="form-check-input" type="radio" name="radioDefault">
                                        <h6 class="card-title ms-3">${document.getElementById('taskTitle').value}</h6>
                                    </header>
                                    <p class="card-text">Details: ${document.getElementById('taskDescription').value}</p>
                                    <p class="card-text">Date: ${document.getElementById('taskDueDate').value}</p>
                                    <p>Priority:<span class="btn badge ms-1 p-1 btn-primary">${document.getElementById('taskPriority').value}</button>
                                    <p>Category:<span class="btn badge ms-1 p-1 btn-info">${document.getElementById('taskCategory').value}</button>
                                    <p>Status:<span class="btn badge ms-1 p-1 btn-danger">Pending</class=></span></p>
                                </div>
                            </section>
                        </div>`

    contenedorPadre.append(hijoPadre)


  }  
}

function validateTaskInput() {
    const title = document.getElementById('taskTitle');
    const description = document.getElementById('taskDescription');
    const dueDate = document.getElementById('taskDueDate');
    
    if( title.value.trim() === '' || description.value.trim() === '' ||  dueDate.value.trim() === '')  {
        alert('Please fill in all required fields: Title, Description, and Due Date.');
        return false ;
    }
    else {
        alert('Task saved successfully!');
        return true ;
    }
  
}