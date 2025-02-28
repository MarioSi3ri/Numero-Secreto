// VARIABLES CON NOMBRES DEL JUEGO.
let secretNumber = 0;
let attempts = 0;
let maximumNumber = 2;
let randomNumbersList = [];
let successes = []; // Variable que identifica los aciertos aleatorios.


// MANTIENE ACTIVO EL FOCO/CURSOR EN EL INPUT/CAJA DE ENTRADA EN LA PÁGINA EN TODO MOMENTO.
/*const input = document.getElementById('numberValue');
    input.addEventListener('blur', function(event) {
    input.focus();
});*/


// VERIFICA QUE EL CURSOR ESTE ACTIVO EN LA CAJA DE ENTRADA AL CARGAR LA PÁGINA.
window.onload = function() {
    document.getElementById('numberValue').focus();
};


// FUNCIÓN QUE ASIGNA LOS NÚMEROS SELECCIONADOS.
function assignTextElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}


// FUNCIÓN QUE MUESTRA LA INFORMACIÓN EN LA ENTRADA PRINCIPAL DEL JUEGO.
function initialInformation() {
    assignTextElement('h1','¿Encontrarás los números secretos?');
    assignTextElement('p',`|Escribe un número del 1 al ${maximumNumber}:`);
    /*assignTextElement('p',`|Escribe un número del 1 al 10`);*/
    secretNumber = generateSecretNumber();
    attempts = 1;
    document.getElementById('verify').disabled = false; // Desbloquea el botón 'Verificar'.
    console.log(secretNumber);
}


// FUNCIÓN QUE LIMITA LA ESCRITURA NÚMERICA DE 0 A 10 EN LA CAJA DE ENTRADA.
function limitNumber(input) {
  input.value = input.value.replace(/\D/g, ''); // Elimina caracteres no numéricos.
    if (/^0\d+/.test(input.value)) { // Evita ceros adicionales y ceros precedidos por otros dígitos.
      input.value = '0';
      input.value = ''; // Deja vacio el input si se repite el mismo número.
    return;
  }
    if (input.value.length > 10) { // Limita a 10 caracteres.
      input.value = input.value.slice(0, 10);
  }
const number = parseInt(input.value); // Limita a números del 0 al 10.
  if (number < 0 || number > 10) {
      input.value = '';
  }
}


// VERIFICA QUE EL CURSOR SIGA ACTIVO CUANDO SE PRESIONA FUERA DEL INPUT.
var container = document.getElementById("containerInformation"); // Obtiene el contenedor y el input.
var input = document.getElementById("numberValue");
container.addEventListener("click", function(event) { // Se agrega un 'Event listener' para el click en el contenedor.
    var outOfInput = input.contains(event.target); // Verifica si el click fue dentro de la caja de entrada.
    if (!outOfInput) { // Si el clic no fue dentro del input; se enfocará en el input haciendo aparecer el cursor.
        input.focus();
    }
});
/*// VERIFICA QUE EL CURSOR SIGA ACTIVO CUANDO SE PRESIONA FUERA DEL INPUT.
var container = document.getElementById("containerContent"); // Obtiene el contenedor y el input.
var input = document.getElementById("numberValue");
container.addEventListener("click", function(event) { // Se agrega un 'Event listener' para el click en el contenedor.
    var outOfInput = input.contains(event.target); // Verifica si el click fue dentro de la caja de entrada.
    if (!outOfInput) { // Si el clic no fue dentro del input; se enfocará en el input haciendo aparecer el cursor.
        input.focus();
    }
});*/


 // CARACTERÍSTICAS DE LA TRANSICIÓN DE IMÁGENES "ANAKIN-VADER" EN EL TRANSCURSO DEL JUEGO.
 const imagesForTransition = [ // Lista de la dirección de las imágenes para la transición.
  './img/dark.png',
  './img/anakin.png'
 ];
 
 let currentImage = 0;
 const imgElementStyle = document.getElementById('darkVader'); // Características de cada imagen.
 const contElementStyle = document.getElementById('imagesTransitionAV'); // Carcaterísticas del contenedor de las imágenes.
 
 function imageTransitionFinal() { // Función para el cambio/transición de las imágenes.
  contElementStyle.style.opacity = 0; // Se disminuye la opacidad para la transición de desvanecimiento.
  setTimeout(() => {
  currentImage = (currentImage + 1) % imagesForTransition.length;
  imgElementStyle.src = imagesForTransition[currentImage];
  contElementStyle.style.opacity = 1; // Se incrementa la opacidad para la transición de desvanecimiento.
 }, 300); // Tiempo de espera coincidente con la duración de la transición de opacidad.
 }
 
 intervalId = setInterval(imageTransitionFinal, 3000); // Tiempo de transición que coincide con la duración de la transición.
 
 /* FUNCIÓN PARA OCULTAR Y PAUSAR LA TRANSICIÓN E IMÁGENES DE "ANAKIN-VADER". */
 function removeTransitionAnakinVader() {
  clearInterval(intervalId); // Pausa la transición al final del juego.
  imgElementStyle.style.display = 'none'; // Muestra las imágenes al final del juego.
 }


// FUNCIÓN PARA LA ANIMACIÓN DEL CIERRE DE LA VENTANA MODAL DE AYUDA.
function animationModalHelp(){
  var animateHelp = document.getElementById('windowHelp');
      var animateHelpC = document.getElementById('contentHelp');
      animateHelpC.classList.add('closeContent');
      animateHelp.classList.add('closexModal'); // Agrega la clase de CSS para iniciar la animación de cierre.
      animateHelp.addEventListener('animationend', function() {
        animateHelp.style.display = 'none';
        animateHelpC.classList.remove('closeContent');
        animateHelp.classList.remove('closexModal'); // Eliminar la clase de animación de cierre.
    }, { once: true });
}


// CARACTERÍSTICAS DE LA VENTANA DE AYUDA.
let windowOpen = false; // Variable que rastrea el estado de la ventana.
  document.addEventListener('keyup', function(event) { // Verifica si se presionan simultáneamente las teclas Alt + A / a.
    if (event.altKey && (event.key === 'a' || event.key === 'A')) {
      windowOpen = !windowOpen; // Alterna el estado de la ventana.
    if (windowOpen) {
      document.getElementById('windowHelp').style.display = 'block'; // Muestra la ventana.
      windowOpen = true;
      var input = document.getElementById("numberValue");
      input.blur(); // Quitar el foco del input
      inputInitiallyInactive = input.disabled; // Verifica si el input está deshabilitado antes de abrir el modal.
      input.disabled = true;
      //input.placeholder = 'Input inactivo'; // Agrega el texto placeholder cuando se inactiva el input.
      inputInactivePlaceholder();
      window.addEventListener('keydown', lockKeysLS);
    } else {
      animationModalHelp();
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowOpen = false;
      unlockKeysLS();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus(); // Coloca el foco en el input para que aparezca el cursor.
    }
    event.preventDefault(); // Evita el comportamiento predeterminado del navegador.
  } else if (event.key === 'Backspace' && windowOpen) { // Verifica si se presiona la tecla 'Backspace' mientras la ventana está abierta.
      animationModalHelp();
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowOpen = false; // Actualiza el estado de la ventana.
      unlockKeysLS();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus(); // Coloca el foco en el input para que aparezca el cursor.
  }
});
    document.getElementById('closeWindow').addEventListener('click', function() { // 'Event listener' para cerrar la ventana haciendo clic en la "x".
      animationModalHelp();
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowOpen = false;
      unlockKeysLS();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus();
});
    document.getElementById('buttonHelp').addEventListener('click', function() { // Abre la ventana de ayuda presionando el botón.
      document.getElementById('windowHelp').style.display = 'block';
      windowOpen = true;
      var input = document.getElementById("numberValue");
      input.blur(); // Quita el foco del input.
      inputInitiallyInactive = input.disabled; // Verifica si el input está deshabilitado antes de abrir el modal.
      input.disabled = true;
      //input.placeholder = 'Input inactivo'; // Agrega el texto placeholder cuando se inactiva el input.
      inputInactivePlaceholder();
      window.addEventListener('keydown', lockKeysLS);
});
    /*document.getElementById('closeWindow').addEventListener('click', function() { // Cierra la ventana de ayuda.
      document.getElementById('windowHelp').style.display = 'none';
      windowOpen = false;
});*/
      var modal = document.getElementById("windowHelp"); // Obtiene la ventana modal de ayuda.
      var animateHelpC = document.getElementById('contentHelp');
      window.onclick = function(event) { // Cuando el usuario hace clic en cualquier parte fuera de la ventana modal, se cierra.
        if (event.target == modal) {
          animateHelpC.classList.add('closeContent');
          modal.classList.add('closexModal'); // Agrega la clase de CSS para iniciar la animación de cierre.
          modal.addEventListener('animationend', function() {
            modal.style.display = 'none';
            animateHelpC.classList.remove('closeContent');
            modal.classList.remove('closexModal'); // Elimina la clase de animación de cierre.
          }, { once: true }); // Evita que se repita la animación más de una vez.
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowOpen = false; // Actualiza el estado de la ventana.
      unlockKeysLS();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus(); // Coloca el foco en el input para que aparezca el cursor.
  }
}
/* FUNCIÓN PARA BLOQUEAR COMBINACIÓN DE TECLAS (ALT + L, ALT + S, ESPACIO y ENTER). */
function lockKeysLS(event) { // Función para bloquear la combinación de teclas.
  if /*(event.altKey && (event.key === 'l' || event.key === 'L' || event.key === 's' || event.key === 'S'))*/
  ((event.altKey && (event.key === 'l' || event.key === 'L' || event.key === 's' || event.key === 'S')) || event.keyCode === 13 || event.keyCode === 32) {
    event.preventDefault();
    event.stopPropagation();
    var buttonVerify = document.getElementById("verify"); // Verifica que las teclas Espacio y Enter no iluminen los botones cuando está abierta la ventana Ayuda.
    /*if (event.keyCode === 13 || event.keyCode === 32) {*/
    buttonVerify.classList.add("desactive");
    setTimeout(function() {
      buttonVerify.classList.remove("desactive");
    }, 200);
  /*}*/
    var buttonRestart = document.getElementById("restart");
    /*if (event.keyCode === 13 || event.keyCode === 32) {*/
    buttonRestart.classList.add("desactive");
    setTimeout(function() {
      buttonRestart.classList.remove("desactive");
    }, 200);
  /*}*/
    alert("Las combinaciones de teclas 'Alt + L' y 'Alt + S' están bloqueadas hasta cerrar está ventana.");
  }
}
function unlockKeysLS() { // Función para desbloquear la combinación de teclas.
    window.removeEventListener('keydown', lockKeysLS);
}


// FUNCIÓN PARA LA ANIMACIÓN DEL CIERRE DE LA VENTANA MODAL DE ACIERTOS.
function animationModalSuccess(){
    var animateSuccess = document.getElementById('windowSuccesses');
    var animateSuccessC = document.getElementById('contentSuccesses');
    animateSuccessC.classList.add('closeContent');
    animateSuccess.classList.add('closexModal'); // Agrega la clase CSS para iniciar la animación de cierre.
    animateSuccess.addEventListener('animationend', function() {
      animateSuccess.style.display = 'none';
      animateSuccessC.classList.remove('closeContent');
      animateSuccess.classList.remove('closexModal'); // Elimina la clase de animación de cierre.
  }, { once: true });
}


// CARACTERÍSTICAS DE LA VENTANA DE ACIERTOS.
let windowSuccess = false; // Variable que rastrea el estado de la ventana.
  document.addEventListener('keyup', function(event) { // Verifica si se presionan simultáneamente las teclas Alt + S / s.
    if (event.altKey && (event.key === 's' || event.key === 'S')) {
      windowSuccess = !windowSuccess; // Alternar el estado de la ventana.
    if (windowSuccess) {
      document.getElementById('windowSuccesses').style.display = 'block'; // Muestra la ventana.
      windowSuccess = true;
      var input = document.getElementById("numberValue");
      //input.blur(); // Quita el foco del input.
      inputInitiallyInactive = input.disabled; // Verifica si el input está deshabilitado antes de abrir el modal.
      input.disabled = true;
      //input.placeholder = 'Input inactivo'; // Agrega el texto placeholder cuando se inactiva el input.
      inputInactivePlaceholder();
      window.addEventListener('keydown', lockKeysAL);
      //var input = document.getElementById("numberValue");
      input.blur();
    } else {      
      animationModalSuccess();
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowSuccess = false;
      unlockKeysAL();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus(); // Coloca el foco en el input para que aparezca el cursor.
    }
    event.preventDefault(); // Evita el comportamiento predeterminado del navegador.
  } else if (event.key === 'Backspace' && windowSuccess) { // Verifica si se presiona la tecla 'Backspace' mientras la ventana está abierta.
      animationModalSuccess();
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowSuccess = false; // Actualiza el estado de la ventana.
      unlockKeysAL();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus();
  }
});
    document.getElementById('closeSuccesses').addEventListener('click', function() { // 'Event listener' para cerrar la ventana haciendo clic en la "x".
      animationModalSuccess();
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowSuccess = false;
      unlockKeysAL();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus();
});
    document.getElementById('buttonSuccesses').addEventListener('click', function() { // Abre la ventana de aciertos presionando el botón con '#' de aciertos.
      document.getElementById('windowSuccesses').style.display = 'block';
      var input = document.getElementById("numberValue");
      input.blur(); // Quita el foco del input.
      inputInitiallyInactive = input.disabled; // Verifica si el input está deshabilitado antes de abrir el modal.
      input.disabled = true;
      //input.placeholder = 'Input inactivo'; // Agrega el texto placeholder cuando se inactiva el input.
      inputInactivePlaceholder();
      windowSuccess = true;
      window.addEventListener('keydown', lockKeysAL);
});
    /*document.getElementById('closeSuccesses').addEventListener('click', function() { // Cierra la ventana de aciertos.
      document.getElementById('windowSuccesses').style.display = 'none';
      windowSuccess = false;
});*/
      var modalSuccesses = document.getElementById("windowSuccesses");
      var animateSuccessC = document.getElementById('contentSuccesses');   
      addEventListener('click', function(event) { // Cuando el usuario hace clic en cualquier parte fuera de la ventana modal, se cierra.
        if (event.target == modalSuccesses) {
          animateSuccessC.classList.add('closeContent');
          modalSuccesses.classList.add('closexModal'); // Agrega la clase CSS para iniciar la animación de cierre.
          modalSuccesses.addEventListener('animationend', function() {
            modalSuccesses.style.display = 'none';
            animateSuccessC.classList.remove('closeContent');
            modalSuccesses.classList.remove('closexModal'); // Elimina la clase de animación de cierre.
  }, { once: true });
      var input = document.getElementById("numberValue");
      input.disabled = false;
      input.placeholder = ''; // Limpia el texto placeholder cuando se activa el input.
      windowSuccess = false; // Actualiza el estado de la ventana.
      unlockKeysAL();
      inputDisabled();
      input.disabled = inputInitiallyInactive; // Restaura el estado del input según su estado inicial.
      input.focus(); // Coloca el foco en el input para que aparezca el cursor.
  }
});
/* FUNCIÓN PARA BLOQUEAR LA COMBINACIÓN DE TECLAS (ALT + A, ALT + L, ESPACIO y ENTER). */
function lockKeysAL(event) { // Función para bloquear la combinación de teclas.
  if /*(event.altKey && (event.key === 'l' || event.key === 'L' || event.key === 'a' || event.key === 'A'))*/
  ((event.altKey && (event.key === 'l' || event.key === 'L' || event.key === 'a' || event.key === 'A')) || event.keyCode === 13 || event.keyCode === 32) {
      event.preventDefault();
      event.stopPropagation();
      var buttonVerify = document.getElementById("verify"); // Verifica que las teclas Espacio y Enter no iluminen los botones cuando está abierta la ventana Aciertos.
    /*if (event.keyCode === 13 || event.keyCode === 32) {*/
      buttonVerify.classList.add("desactive");
      setTimeout(function() {
      buttonVerify.classList.remove("desactive");
    }, 200);
  /*}*/
      var buttonRestart = document.getElementById("restart");
    /*if (event.keyCode === 13 || event.keyCode === 32) {*/
      buttonRestart.classList.add("desactive");
      setTimeout(function() {
      buttonRestart.classList.remove("desactive");
    }, 200);
  /*}*/
      alert("Las combinaciones de teclas 'Alt + A' y 'Alt + L' están bloqueadas hasta cerrar está ventana.");
  }
}
function unlockKeysAL() { // Función para desbloquear la combinación de teclas.
  window.removeEventListener('keydown', lockKeysAL);
}


// FUNCIÓN QUE VERIFICA SI EL NÚMERO SECRETO ES EL CORRECTO CON LAS CARACTERÍSTICAS DEL PROCESO.
function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('numberValue').value);
    if (userNumber === secretNumber) {
        assignTextElement('p',`|¡Lo lograste en ${attempts} ${(attempts === 1) ? 'intento!' : 'intentos!'}`);
        document.getElementById('restart').removeAttribute('disabled');
        document.getElementById('numberValue').disabled = true; // Bloquea la caja de entrada con el resultado.
        document.getElementById('verify').disabled = true; // Bloquea el botón 'Verificar'.
        document.getElementById('message').innerText = '¡Haz acertado! Continua hasta el final.';
    } else {
        if (userNumber > secretNumber) {
            assignTextElement('p','|El número secreto es menor a' + ' ' + userNumber + ".");
            document.getElementById('message').innerText = '¡Sigue intentando!';
        } else if (userNumber < secretNumber) {
            assignTextElement('p','|El número secreto es mayor a' + ' ' + userNumber + ".");
            document.getElementById('message').innerText = '¡Sigue intentando!';
        } else {
            assignTextElement('p',`|Escribe un número del 1 al ${maximumNumber}:`);
            /*assignTextElement('p',`|Escribe un número del 1 al 10`);*/
            /*assignTextElement('p', '');*/
        }
    const inputText = document.getElementById('numberValue');
    const verification = document.getElementById('verify'); // Función para habilitar o deshabilitar el botón según el contenido de la caja de entrada.
function updateVerifyButton() {
          if (inputText.value.trim() === '') {
            verification.disabled = true; // Deshabilita el botón si la caja de entrada está vacía.
          } else {
            verification.disabled = false; // Habilita el botón si la caja de entrada contiene números.
          }
        }
        inputText.addEventListener('input', updateVerifyButton); // Escucha eventos de entrada en la caja de entrada.
        updateVerifyButton(); // Llama a la función al cargar o recargar la página para manejar el estado inicial.
        attempts++;
        clearEntry();
        var input = document.getElementById("numberValue");
        input.focus(); // Coloca el foco en el input para que aparezca el cursor.
    }
    return;
}


// CLIC AL BOTÓN 'VERIFICAR' CON LA TECLA ENTER.
document.getElementById("numberValue").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // Verifica si la tecla presionada es "Enter".
    event.preventDefault(); // Evita que se recargue la página.
    document.getElementById("verify").click(); // Simula un clic en el botón.
  }
});


// ANIMACIÓN DEL BOTÓN 'VERIFICAR' AL PRESIONAR CON LA TECLA ENTER.
var buttonVerify = document.getElementById("verify");
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13/*event.key === "Enter"*/) {
    /*setTimeout(function() {*/
    buttonVerify.classList.add("active");
    /*buttonVerify.style.pointerEvents = "none";*/ // Desactivar eventos de puntero
    /*}, 5);*/
    setTimeout(function() {
      buttonVerify.classList.remove("active");
      /*buttonVerify.style.pointerEvents = "auto";*/ // Reactivar eventos de puntero
    }, 200); // Tiempo en milisegundos para quitar la sombra.
  }
});


// VERIFICA SI SE INGRESA UN PUNTO EN LA CAJA DE ENTRADA.
document.addEventListener("DOMContentLoaded", function() {
  var inputDat = document.getElementById("numberValue");
    inputDat.addEventListener("keydown", function(event) {
      if (event.key === ".") { // Verifica si se ingresa un punto para evitarlo; diferenciando el punto de los números.
        event.preventDefault();
      }
    });
});


// CLIC AL BOTÓN 'NUEVO INTENTO' CON LA TECLA DE ESPACIO.
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 32) { // Verifica si la tecla presionada es "Espacio".
    event.preventDefault(); // Evita que se recargue la página.
    document.getElementById("restart").click(); // Simula un clic en el botón.
  }
});


// ANIMACIÓN DEL BOTÓN 'NUEVO INTENTO' AL PRESIONAR CON LA TECLA ESPACIO.
var buttonRestart = document.getElementById("restart");
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32/*event.key === "Enter"*/) {
    buttonRestart.classList.add("active");
    /*buttonRestart.style.pointerEvents = "none";*/ // Desactivar eventos de puntero
    setTimeout(function() {
      buttonRestart.classList.remove("active");
      /*buttonRestart.style.pointerEvents = "auto";*/ // Reactivar eventos de puntero
    }, 200); // Tiempo en milisegundos para quitar la sombra.
  }
});


// CLIC EN EL ICONO DE 'GITHUB' PARA QUE NO DESAPAREZCA EL CURSOR DE LA CAJA DE ENTRADA.
document.getElementById('gitHub').addEventListener('click', function() { // 'Event listener' funcionará cuando se de clic en el icono de GitHub.
  var input = document.getElementById("numberValue");
    input.focus(); // Coloca el foco en el input para que aparezca el cursor.
});


// FUNCIÓN PARA MANTENER BLOQUEADO EL INPUT CUANDO ES ADIVINADO UN NÚMERO.
let inputInitiallyInactive = false; // Variable para almacenar el estado inicial del input.
function inputDisabled() {
  let userNumber = parseInt(document.getElementById('numberValue').value);
  /*function inputDisabled() {
  let userNumber = parseInt(document.getElementById('numberValue').value);
    if (userNumber === secretNumber) { // Se bloquea la caja de texto sí el número en el input es igual al número secreto.
      document.getElementById('numberValue').disabled = true;
        }
  }*/
  switch (userNumber) { // Switch para verificar el número ingresado.
    case secretNumber:
        input.disabled = true; // Deshabilita el input si el número es correcto.
        break;
    default:
        break;
  }
}

// FUNCIÓN QUE CAMBIA EL COLOR DEL PLACEHOLDER AL ESTABLECER EL INPUT INACTIVO.
function inputInactivePlaceholder() {
  var inputInactive = document.getElementById("numberValue");
      inputInactive.classList.add('input__inactive');
      inputInactive.placeholder = 'INPUT INACTIVO'; // Agrega el texto placeholder cuando se inactiva el input.
}


// FUNCIÓN QUE IDENTIFICA LOS ACIERTOS EN EL JUEGO.
function check() { // Función que verifica/comprueba el número secreto de los números aleatorios con el número ingresado en la caja de entrada.
  const input = document.getElementById('numberValue').value;
  const userNumbers = input.split(',').map(num => parseInt(num.trim()));
let numSuccesses = 0;
  for (let i = 0; i < 2; i++) {
      if (userNumbers.includes(randomNumbersList[i])) {
          numSuccesses++;
          if (!successes.includes(randomNumbersList[i])) {
              successes.push(randomNumbersList[i]);
          }
      }
  }
var successesStyle = successes.map(function(numbers) { // Itera sobre cada elemento del array y crea una versión con el estilo de números grandes.
if (numbers <= 10) { // Si el número es mayor o igual que 10, aplica un estilo de fuente.
  return `<span class="style__successes">${numbers}</span>`;
} else {
  return numbers; // Si el número no es mayor que 10, simplemente se muestra sin cambios.
}
});
  document.getElementById('successes').innerHTML = `${successesStyle.join(', ')}`; // Actualiza mostrando los aciertos de 'successes' en el HTML.
    if (numSuccesses === 2) {
  }
}
document.getElementById('verify').addEventListener('click', check); // Compara los números ingresados en la caja de entrada presionando el botón 'Verificar'.


// FUNCIÓN QUE GENERA EL NÚMERO SECRETO CON LAS CARACTERÍSTICAS Y ELEMENTOS DE FINALIZACIÓN...
function generateSecretNumber() {
    /*let generatedNumber =  Math.floor(Math.random()*10)+1;*/
    let generatedNumber =  Math.floor(Math.random()*maximumNumber)+1;
    console.log(generatedNumber);
    console.log(randomNumbersList);
  if (randomNumbersList.length == maximumNumber) {
        assignTextElement('h1','¡Lo lograste joven Padawan!');
        assignTextElement('p','|¡Completaste el juego!');
        removeTransitionAnakinVader(); // Función para ocultar transición e imágenes "Anakin-Vader".
        transitionVader(); // Transición de imágenes al final del juego.
/* CARACTERÍSTICAS DEL TÍTULO 'STAR WARS' DE FINALIZACIÓN. */
var span; // Variables del título.
var letter;    
var titleLine = document.getElementById('titleLine'); // Encuentra el H2 en el HTML.
    titleLineText = titleLine.innerHTML; // Obtiene el contenido del H2.
    titleLineArr = titleLineText.split(''); // Divide el contenido en una matriz.
    titleLine.innerHTML = ''; // Limpia el contenido actual.    
  for(i=0;i<titleLineArr.length;i++){ // Bucle para cada letra.
        span = document.createElement("span"); // Crea un elemento <span>.
        letter = document.createTextNode(titleLineArr[i]); // Crea la carta.
          if(titleLineArr[i] == ' ') { // Limpia si la letra es un espacio...
            titleLine.appendChild(letter); // ...Añade el espacio sin intervalo.
          } else {
            span.appendChild(letter); // Agrega la letra al lapso <span>.
            titleLine.appendChild(span); // Agrega el intervalo al h2.
          }
}
/* FUNCIÓN PARA BLOQUEAR LA COMBINACIÓN DE TECLAS (ALT + A, ALT + S, ESPACIO y ENTER). */
function lockKeys(event) { // Función para bloquear la combinación de teclas.
    if /*(event.altKey && (event.key === 'a' || event.key === 'A' || event.key === 's' || event.key === 'S'))*/
    ((event.altKey && (event.key === 'a' || event.key === 'A' || event.key === 's' || event.key === 'S')) || event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        event.stopPropagation();
        alert("Las combinaciones de teclas 'Alt + A' y 'Alt + S' están bloqueadas hasta cerrar está ventana.");
    }
}
function unlockKeys() { // Función para desbloquear la combinación de teclas.
    window.removeEventListener('keydown', lockKeys);
}
/* CARACTERÍSTICAS DE LA VENTANA ¡LOGRADO! (ALT + L).*/
let winModal = true; // Variable que rastrea el estado de la ventana.
    window.addEventListener('keydown', lockKeys);
    document.addEventListener('keyup', function(event) { // Verifica si se presionan simultáneamente las teclas Alt + L / l.
    if (event.altKey && (event.key === 'l' || event.key === 'L')) {
    winModal = !winModal; // Alterna el estado de la ventana.
    if (winModal) {
        document.getElementById('windowModal').style.display = 'block'; // Muestra la ventana.
        document.getElementById('openModal').style.display = 'block';
        playSong();
        winModal = true;
        window.addEventListener('keydown', lockKeys);
        var input = document.getElementById("numberValue");
        input.blur(); // Quita el foco del input.        
    } else {
        var animateModal = document.getElementById('windowModal'); // Oculta la ventana.
        pauseSong();
        animateModal.classList.add('modalWin'); // Agrega la clase CSS para iniciar la animación de cierre.
        animateModal.addEventListener('animationend', function() {
          animateModal.style.display = 'none';
          winModal = false;
          animateModal.classList.remove('modalWin'); // Elimina la clase de animación de cierre.
      }, { once: true });
        var input = document.getElementById("numberValue");
        input.disabled = false;
        document.getElementById('openModal').style.display = 'block';
        winModal = false;
        unlockKeys();
    }
        event.preventDefault(); // Evita el comportamiento predeterminado del navegador.
  } else if (event.key === 'Backspace' && winModal) { // Verifica si se presiona la tecla 'Backspace' mientras la ventana está abierta.
    pauseSong();
        document.getElementById('openModal').style.display = 'block';
        winModal = true; // Actualiza el estado de la ventana.
        document.getElementById('closeModal').style.display = 'block';
        winModal = false;
        var animateModal = document.getElementById('windowModal');
        animateModal.classList.add('modalWin');
        animateModal.addEventListener('animationend', function() {
          animateModal.style.display = 'none';
          winModal = false;
          animateModal.classList.remove('modalWin');
      }, { once: true });
        var input = document.getElementById("numberValue");
        input.disabled=false;
        unlockKeys();
  }
});
    /*document.getElementById('closeModal').addEventListener('click', function() { // 'Event listener' para cerrar la ventana haciendo clic en la "x".
        document.getElementById('windowModal').style.display = 'none';
        winModal = false;
        unlockKeys();
});*/
    document.getElementById('openModal').addEventListener('click', function() { // Abrir la ventana ¡Logrado! presionando el botón.
        document.getElementById('windowModal').style.display = 'block';
        playSong();
        winModal = true;
        window.addEventListener('keydown', lockKeys);
});
    document.getElementById('closeModal').addEventListener('click', function() { // 'Event listener' para cerrar la ventana haciendo clic en la "x".
    var animateModal = document.getElementById('windowModal');
    pauseSong();
    animateModal.classList.add('modalWin');
    animateModal.addEventListener('animationend', function() {
      animateModal.style.display = 'none';
      winModal = false;
      animateModal.classList.remove('modalWin');
  }, { once: true });
    var input = document.getElementById("numberValue");
    input.disabled=false;
    if (randomNumbersList.length == maximumNumber) { // Si el usuario seleccionó todos los números secretos aleatorios, se bloqueará el proceso de selección de números aleatorios.
        document.getElementById('closeModal').style.display = 'block';
        document.getElementById('openModal').style.display = 'block';
        winModal = false;
  }
    unlockKeys();
});
// ...CARACTERÍSTICAS DE FINALIZACIÓN, CONTINUACIÓN.
        document.getElementById('message').innerHTML = '<strong>¡Felicidades!</strong> Has encontrado los 7 números.';
        document.getElementById('windowModal').style.display = 'block';
        document.getElementById('closeModal').style.display = 'block';
        document.getElementById('verify').style.display = 'none'; // Oculta el botón al finalizar el juego.
        document.getElementById('restart').style.display = 'none';
        document.getElementById('numberValue').style.display = 'none';
        document.getElementById('inputPlaceholder').style.display = 'none';
        document.getElementById('reload').style.display = 'block'; // Muestra el botón para recargar la página al finalizar el juego.
        document.querySelector('#verify').setAttribute('disabled','true'); // Bloquea funciones del botón 'Verificar' al finalizar el juego.
        document.querySelector('#restart').setAttribute('disabled','true'); // Bloquea funciones del botón 'Nuevo intento' al finalizar el juego.
        document.getElementById('maximumNumber').disabled = true; // Bloquea funciones de la caja de entrada al establecer el número máximo de intentos.
  } else {
        if (randomNumbersList.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            randomNumbersList.push(generatedNumber);
            return generatedNumber;
        }
    }
}


// FUNCIÓN PARA LA TRANSICIÓN DE IMÁGENES DE "VADER" AL FINAL DEL JUEGO.
function transitionVader() {
  const imagesForTransition = [ // Lista de la dirección de las imágenes para la transición.
    './img/dark.png',
    './img/vader.png',
    './img/darkvaderSW.png'
  ];
  
  let currentImage = 0;
  const imgElementStyle = document.getElementById('darkVader'); // Características de cada imagen.
  const contElementStyle = document.getElementById('imagesTransitionAV'); // Carcaterísticas del contenedor de las imágenes.
  imgElementStyle.style.display = 'block'; // Muestra las imágenes al final del juego.
  
  function imageTransitionFinal() { // Función para el cambio/transición de las imágenes.
    contElementStyle.style.opacity = 0; // Se disminuye la opacidad para la transición de desvanecimiento.
    setTimeout(() => {
    currentImage = (currentImage + 1) % imagesForTransition.length;
    imgElementStyle.src = imagesForTransition[currentImage];
    contElementStyle.style.opacity = 1; // Se incrementa la opacidad para la transición de desvanecimiento.
  }, 400); // Tiempo de espera coincidente con la duración de la transición de opacidad.
  }

  setInterval(imageTransitionFinal, 4000); // Tiempo de transición que coincide con la duración de la transición.
  
  }


// FUNCIÓN QUE REINICIA EL JUEGO Y LA CAJA DE ENTRADA.
function restartGame() {
    clearEntry();
    initialInformation();
    document.querySelector('#restart').setAttribute('disabled','true');
    if (randomNumbersList.length == maximumNumber) {
      document.getElementById("restart").innerText = "¡Logrado!"; // Cambia el texto del botón; de 'Nuevo intento' a '¡Logrado!'.
      document.getElementById("restart").setAttribute("data-title", "¡Lo lograste! Presiona el botón o la tecla Space/Espacio para visualizar tu logro");
      document.getElementById("restart").addEventListener('click', function() {   // Aquí pausas la música cuando se cierra la ventana modal con X
      playSong();
      });
    }
    document.getElementById('numberValue').disabled = false; // Desbloquea la caja de entrada al reiniciar.
    var input = document.getElementById("numberValue");
    input.focus(); // Coloca el foco en la caja de entrada para que aparezca el cursor.
}

initialInformation();

// CARACTERÍSTICAS DEL BOTÓN PARA REPRODUCIR/PAUSAR AUDIO.
document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('music');
  var playButton = document.getElementById('playButton');
  const progressBar = document.getElementById('progressMusicBar');

  playButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playButton.textContent = '🔊';
    } else {
      audio.pause();
      playButton.textContent = '🔈';
    }
  });

  audio.addEventListener('play', function() {   // Cambia el texto del botón cuando se reproduce el audio.
    playButton.textContent = '🔊';
    //playButton.textContent = 'II';
  });

  audio.addEventListener('pause', function() { // Cambia el texto del botón cuando se pausa el audio.
    playButton.textContent = '🔈';
    //playButton.textContent = '▶︎';
  });

  audio.addEventListener('timeupdate', updateProgressMusicBar); // Evento que actualiza la barra de progreso a medida que se reproduce el audio.

  function updateProgressMusicBar() {
      const progress = (audio.currentTime / audio.duration) * 100; // Calcula el porcentaje de progreso del audio/música.
      progressBar.style.width = `${progress}%`; // Actualiza el ancho de la barra de progreso.
  }
});
/* FUNCIÓN PARA CAMBIAR LA POSICIÓN DEL AUDIO AL HACER CLIC EN LA BARRA DE PROGRESO. */
  const progressContainer = document.querySelector('.progress__container'); // Variable o elemento del DOM.
  var audio = document.getElementById('music');
function seek(event) {
      const width = progressContainer.clientWidth; // Ancho del contenedor de la barra de progreso.
      const clickX = event.offsetX; // Posición horizontal del clic dentro del contenedor.
      const duration = audio.duration; // Duración total del audio.
      audio.currentTime = (clickX / width) * duration; // Calcula el nuevo tiempo del audio basado en la posición del clic.
}

// FUNCIÓN PARA REPRODUCIR EL AUDIO EN ¡LOGRADO!
function playSong(){
  var audio = document.getElementById('music');
  audio.play();
  playButton.textContent ='🔊';
}

// FUNCIÓN PARA PAUSAR EL AUDIO EN ¡LOGRADO!
function pauseSong() {
  var audio = document.getElementById('music');
  audio.pause();
  playButton.textContent = '🔈';
  audio.currentTime = 0;
}


// FUNCIÓN QUE LIMPIA LA CAJA DE ENTRADA.
function clearEntry() {
  document.querySelector('#numberValue').value = '';
}


// FUNCIÓN QUE RECARGA LA PÁGINA DEL JUEGO.
function reloadGame() {
  location.reload();
}



/* _____________________________________________________________ */



// FUNCIÓN PARA MANTENER BLOQUEADO EL INPUT CUANDO ES ADIVINADO UN NÚMERO.
/*let inputInitiallyInactive = false; // Variable para almacenar el estado inicial del input.

function inputDisabled() {
  let userNumber = parseInt(document.getElementById('numberValue').value);
  /*function inputDisabled() {
  let userNumber = parseInt(document.getElementById('numberValue').value);
    if (userNumber === secretNumber) { // Se bloquea la caja de texto sí el número en el input es igual al número secreto.
      document.getElementById('numberValue').disabled = true;
        }
  }*/
    /*switch (userNumber) { // Switch para verificar el número ingresado.
      case secretNumber:
          input.disabled = true; // Deshabilita el input si el número es correcto.
          break;
      default:
          break;
    }
}*/

// FUNCIÓN QUE CAMBIA EL COLOR DEL PLACEHOLDER AL ESTABLECER EL INPUT INACTIVO.
/*function inputInactivePlaceholder() {
  var inputInactive = document.getElementById("numberValue");
      inputInactive.classList.add('input__inactive');
      inputInactive.placeholder = 'INPUT INACTIVO'; // Agrega el texto placeholder cuando se inactiva el input.
}*/

