// -------------------------- SECCION LOGIN VERIFICACION SI SE ESTA LOGUEADO O NO ---------------------------------

//----------- VERIFICAMOS QUE ESTAMOS LOGUEADOS
if (sessionStorage.getItem("logueado") !== "true") {
  window.location.href = "./index.html";
}

//----------- BOTON PARA CERRAR SESION
const btnLogout = document.querySelector("#btn-logout");

btnLogout.addEventListener("click", function () {
  sessionStorage.removeItem("logueado");
  window.location.href = "./index.html";
});


// -------------------------- SECCION CALENDARIO ---------------------------------

// ---------- CALENDARIO
flatpickr("#calendar", {
  inline: true,
  dateFormat: "Y-m-d"
});

// -------------------------- SECCION CAMBIAR COLOR PAGINA ---------------------------------

// ---------- TEMA HOME
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-bs-theme");
  document.documentElement.setAttribute(
    "data-bs-theme",
    current === "dark" ? "light" : "dark"
  );
});


// -------------------------- SECCION HOME ---------------------------------

// ---------- SELECCIÓN DE ELEMENTOS
const contenedorPadre = document.querySelector('#contenedor-padre-tareas');
const saveTaskButton = document.querySelector('#saveTaskButton');

//----------- CARGAMOS LAS TRAEAS QUE HAY EN EL LOCALSTORAGE Y SI NO HAY CREAMOS EL ARRAY DONDE SE GUARDARAN
let tareas = JSON.parse(localStorage.getItem("tasks")) || [];
mostrarTareas();

// ---------- BOTÓN GUARDAR
saveTaskButton.addEventListener("click", function () {
  Guardar();
});

// ---------- GUARDAR TAREA
function Guardar() {

  if (!validateTaskInput()) {
    return;
  }

  //--------- CREAMOS EL OBJETO DE LA TAREA
  const nuevaTarea = {
    title: document.getElementById('taskTitle').value,
    description: document.getElementById('taskDescription').value,
    dueDate: document.getElementById('taskDueDate').value,
    priority: document.getElementById('taskPriority').value,
    category: document.getElementById('taskCategory').value
  };

  //---------- AGREGAMOS LA INFORMACION DEL ARREGLO AL ARRAY TAREAS
  tareas.push(nuevaTarea);

  //---------- GUARDAMOS EN EL LOCALSTORAGE
  localStorage.setItem("tasks", JSON.stringify(tareas));
  mostrarTareas();
  limpiarModal();

  //---------- CERRAMOS EL MODAL 
  const modal = bootstrap.Modal.getInstance(document.querySelector('#createTaskModal'));
  modal.hide();

  alert('Task saved successfully!');
}

function validateTaskInput() {
  const title = document.getElementById('taskTitle');
  const description = document.getElementById('taskDescription');
  const dueDate = document.getElementById('taskDueDate');

  if (title.value.trim() === '' || description.value.trim() === '' || dueDate.value.trim() === '') {
    alert('Please fill in all required fields: Title, Description, and Due Date.');
    return false;
  }
  return true;
}

// ---------- MOSTRAR TAREAS
function mostrarTareas() {
  contenedorPadre.innerHTML = ""; 

  tareas.forEach((tarea, index) => {
    const taskContainer = document.createElement('div');
    taskContainer.innerHTML = `
        <div class="col-6 cardCard">
            <section class="card" onclick="seleccionarTarea(${index})">
                <div class="card-body">
                <header class="d-flex">
                    <input class="form-check-input" type="radio" name="radioDefault">
                    <h6 class="card-title ms-3">${tarea.title}</h6>
                </header>
                <p class="card-text">Details: ${tarea.description}</p>
                <p class="card-text">Date: ${tarea.dueDate}</p>
                <p>Priority:<span class="btn badge ms-1 p-1 btn-primary">${tarea.priority}</span></p>
                <p>Category:<span class="btn badge ms-1 p-1 btn-info">${tarea.category}</span></p>
                <button class="btn btn-sm btn-danger mt-2" onclick="eliminarTarea(${index})">Delete</button>
                </div>
            </section>
        </div>
    `;

    contenedorPadre.append(taskContainer);
  });
}

// ---------- ELIMINAR TAREA
function eliminarTarea(index) {
  tareas.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tareas));
  mostrarTareas();
}

// ---------- LIMPIAR MODAL
function limpiarModal() {
  document.getElementById('taskTitle').value = "";
  document.getElementById('taskDescription').value = "";
  document.getElementById('taskDueDate').value = "";
  document.getElementById('taskPriority').value = "low";
  document.getElementById('taskCategory').value = "Work";
}



// -------------------------- SECCION DONDE SELECCIONAMOS LAS TAREAS A MODIFICAR O ELIMINAR ---------------------------------

// ---------- SELECCIÓN DE ELEMENTOS
const detailTitle = document.getElementById('detail-title');
const detailDescription = document.getElementById('detail-description');
const detailDate = document.getElementById('detail-date');
const detailPriority = document.getElementById('detail-priority');
const detailCategory = document.getElementById('detail-category');
const detailStatus = document.getElementById('detail-status');

const btnEditDetail = document.getElementById('btn-edit');
const btnDeleteDetail = document.getElementById('btn-delete-detail');

// ---------- VARIABLE PARA GUARDAR LA TAREA SELECCIONADA
let selectedTaskIndex = null;

// ---------- SELECCIONAMOS LAS TRAEAS DESDE EL LISTADO
function seleccionarTarea(index) {
  selectedTaskIndex = index;
  const tarea = tareas[index];
  //  ------- LEEMOS LOS VALORES DE LOS CAMPOS CON LA PROPIEDAD innerText
  detailTitle.innerText = tarea.title;
  detailDescription.innerText = "Details: " + tarea.description;
  detailDate.innerText = "Date: " + tarea.dueDate;
  detailPriority.innerText = tarea.priority;
  detailCategory.innerText = tarea.category;
  detailStatus.innerText = tarea.status;

  btnEditDetail.style.display = "block";
  btnDeleteDetail.style.display = "block";
}

// ---------- ELIMINAMOS LAS TRAEAS QUE TENEMOS SELECCIONADAS
btnDeleteDetail.addEventListener("click", function () {
  if (selectedTaskIndex === null) return;

  tareas.splice(selectedTaskIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tareas));
  mostrarTareas();

  selectedTaskIndex = null;
  detailTitle.innerText = "Select a task";
  detailDescription.innerText = "";
  detailDate.innerText = "";
  detailPriority.innerText = "";
  detailCategory.innerText = "";
  detailStatus.innerText = "";
});


// FILTRE TAREAS

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const prioritySelected = btn.textContent.trim().toLowerCase();
        const cards = document.querySelectorAll("#contenedor-padre-tareas .cardCard");

        let found = false;

        cards.forEach(card => {
            const priority = card
                .querySelector("[data-priority]")
                .dataset.priority
                .toLowerCase();

            if (priority === prioritySelected) {
                card.style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        if (!found) {
            alert("No tasks found with the selected priority.");
        }
    });
});




