function mostrarDatos() {

  const person = {
    name: 'Juan Carlos Valencia',
    age: 30,
    city: 'Cali',
    profession: 'Desarrollador'
  };

  // Destructuring
  const { name, age, profession } = person;

  document.getElementById("nombre").textContent = `Nombre: ${name}`;
  document.getElementById("edad").textContent = `Edad: ${age}`;
  document.getElementById("profesion").textContent = `Profesión: ${profession}`;
}
