// Crear promesa que verifica si termina en vocal
function verificarUltimaLetra(cadena) {
  return new Promise((resolve, reject) => {

    if (!cadena || cadena.length === 0) {
      reject("La cadena está vacía.");
      return;
    }

    const ultimaLetra = cadena.charAt(cadena.length - 1);
    const vocales = "aeiouAEIOU";

    if (vocales.includes(ultimaLetra)) {
      resolve(ultimaLetra);
    } else {
      reject("El caracter no es una vocal");
    }

  });
}

function verificarVocal() {
  const cadena = document.getElementById("cadena").value.trim();
  const resultado = document.getElementById("resultadoPromise");

  resultado.textContent = "Verificando...";

  verificarUltimaLetra(cadena)
    .then((vocal) => {
      resultado.textContent = `La última letra es la vocal: ${vocal}`;
      resultado.className = "text-success";
    })
    .catch((error) => {
      resultado.textContent = error;
      resultado.className = "text-danger";
    });
}

