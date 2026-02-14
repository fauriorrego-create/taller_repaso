// variable global para editar
let indiceEditar = null;

// Funcion para mostrar datos
const showData = () => {
  const tableBody = document.getElementById("tableBody");
  const usuarios = JSON.parse(localStorage.getItem("datosDeUsuario")) || [];

  tableBody.innerHTML = "";

  usuarios.forEach((user, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${user.name}</td>
      <td>${user.document}</td>
      <td>${user.email}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editUser(${index})">Editar</button>
      </td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Borrar</button>
      </td>
    `;

    tableBody.appendChild(fila);
  });
};

showData();

// Funcion para guardar datos
const form = document.getElementById("dataForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = {
    name: document.getElementById("name").value.trim(),
    document: document.getElementById("document").value.trim(),
    email: document.getElementById("email").value.trim()
  };

  let usuarios = JSON.parse(localStorage.getItem("datosDeUsuario")) || [];

  // validar si ya existe el usuario
  const existe = usuarios.find((u, index) =>
    (u.document === datos.document || u.email === datos.email) &&
    index !== indiceEditar
  );

  if (existe) {
    alert(" El usuario ya está registrado");
    return;
  }

  // editar
  if (indiceEditar !== null) {
    usuarios[indiceEditar] = datos;
    indiceEditar = null;
  }
  // Guardar un nuevo usuario
  else {
    usuarios.push(datos);
  }

  localStorage.setItem("datosDeUsuario", JSON.stringify(usuarios));

  form.reset();
  showData();
});

// funcion para editar los usuarios
const editUser = (index) => {
  const usuarios = JSON.parse(localStorage.getItem("datosDeUsuario")) || [];
  const user = usuarios[index];

  document.getElementById("name").value = user.name;
  document.getElementById("document").value = user.document;
  document.getElementById("email").value = user.email;

  indiceEditar = index;
};

//funcion para borrar un usuario
const deleteUser = (index) => {
  let usuarios = JSON.parse(localStorage.getItem("datosDeUsuario")) || [];

  if (confirm("¿Seguro que quieres borrar este registro?")) {
    usuarios.splice(index, 1);
  }

  localStorage.setItem("datosDeUsuario", JSON.stringify(usuarios));

  showData();
};

//Funcion para borrar todos los datos
const deleteAllUsers = () => {
  if (confirm("¿Seguro que quieres borrar todos los datos?")) {
    localStorage.removeItem("datosDeUsuario");
    showData();
  }
};
