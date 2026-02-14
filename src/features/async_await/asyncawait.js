// Función que retorna el doble después de 2 segundos
function obtenerDoble(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero * 2);
    }, 2000);
  });
}

// Función asíncrona usando async/await
async function calcularDoble() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultadoElemento = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultadoElemento.textContent = "Por favor ingresa un número válido.";
    return;
  }

  resultadoElemento.textContent = "Calculando... ";

  const resultado = await obtenerDoble(numero);

  resultadoElemento.textContent = `El doble es: ${resultado}`;
}
