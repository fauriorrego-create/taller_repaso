// Bases de datos
const baseDatos1 = ["Canada", "EUA", "Mexico", "Ecuador", "Brazil", "Argentina", "Uruguay"];
const baseDatos2 = ["Japón", "Irán", "Corea del Sur", "Alemania", "Croacia", "España", "Inglaterra"];

// 🔹 Función para normalizar texto (ignorar tildes y mayúsculas)
const normalizar = (texto) => {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

// 🔹 Callback cuando se encuentra el país
const encontrado = (pais) => {
  const resultado = document.getElementById("resultado");
  resultado.className = "alert alert-success text-center mt-3";
  resultado.innerHTML = ` País encontrado: <b>${pais}</b>`;
};

// 🔹 Buscar en baseDatos2 (callback)
const busquedaBaseDatos2 = (pais, callbackEncontrado) => {
  const paisNormalizado = normalizar(pais);

  const encontradoPais = baseDatos2.find(p =>
    normalizar(p) === paisNormalizado
  );

  if (encontradoPais) {
    callbackEncontrado(encontradoPais);
  } else {
    const resultado = document.getElementById("resultado");
    resultado.className = "alert alert-danger text-center mt-3";
    resultado.innerHTML = " Dato no encontrado";
  }
};

// 🔹 Buscar en baseDatos1 (callback)
const busquedaBaseDatos1 = (pais, callbackEncontrado, callbackBase2) => {
  const paisNormalizado = normalizar(pais);

  const encontradoPais = baseDatos1.find(p =>
    normalizar(p) === paisNormalizado
  );

  if (encontradoPais) {
    callbackEncontrado(encontradoPais);
  } else {
    callbackBase2(pais, callbackEncontrado);
  }
};

// 🔹 Función principal (GLOBAL para que funcione con HTML)
function buscarPais() {
  const input = document.getElementById("paisInput");
  const pais = input.value.trim();

  if (pais === "") {
    const resultado = document.getElementById("resultado");
    resultado.className = "alert alert-warning text-center mt-3";
    resultado.innerHTML = " Ingresa un país";
    return;
  }

  busquedaBaseDatos1(pais, encontrado, busquedaBaseDatos2);

  // limpiar input
  input.value = "";
}
