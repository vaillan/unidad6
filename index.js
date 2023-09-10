// Import stylesheets
import './style.css';

//Variables globales
let listaNumeros = [2, 10, 16, 12, 38, 33, 18, 90, 17, 34];
let mayor = 0;
let menor = 0;
let promedio = 0;

// Inicio del proceso general de la aplicación
function recorrerLista() {
  let numMayorResult = 0;
  let numMenorResult = 0;
  let suma = 0;

  for (let i = 0; i < listaNumeros.length; i++) {
    // Obtenemos el primer valor
    let number = listaNumeros[i];

    //Sumamos cada numero para obtener el promedio
    suma += listaNumeros[i];

    if (i == 0) {
      numMayorResult = number;
      numMenorResult = number;
    } else {
      // Realizamos validaciones para obtener el numero mayor
      if (number > numMayorResult) {
        numMayorResult = number;
      }
      // Realizamos validaciones para obtener el numero menor
      if (number < numMenorResult) {
        numMenorResult = number;
      }
    }
  }

  mayor = numMayorResult;
  menor = numMenorResult;
  promedio = suma / listaNumeros.length;
};

/**
 * Función para mostrar etiqueta de montos
 * @return {void}
 */
function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    <p>Numero Mayor: ${mayor}</p>
    
    <p>Numero menor: ${menor}</p>
  
    <p>Promedio: ${promedio}</p>

    <p>Lista: ${listaNumeros.toString()}</p>
  </div>
  `;
}


function onInit() {
  recorrerLista();
  setAlert();
}

onInit();