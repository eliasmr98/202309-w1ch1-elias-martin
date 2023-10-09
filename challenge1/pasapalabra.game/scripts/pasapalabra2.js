const questions = [
  {
    letter: 'a',
    answer: 'abducir',
    question:
      'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien',
    answered: false,
  },
  {
    letter: 'b',
    answer: 'bingo',
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
    answered: false,
  },
  {
    letter: 'c',
    answer: 'churumbel',
    question: 'CON LA C. Niño, crío, bebé',
    answered: false,
  },
  {
    letter: 'd',
    answer: 'diarrea',
    question:
      'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida',
    answered: false,
  },
  {
    letter: 'e',
    answer: 'ectoplasma',
    question:
      'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación',
    answered: false,
  },
  {
    letter: 'f',
    answer: 'facil',
    question: 'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad',
    answered: false,
  },
  {
    letter: 'g',
    answer: 'galaxia',
    question:
      'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas',
    answered: false,
  },
  {
    letter: 'h',
    answer: 'harakiri',
    question: 'CON LA H. Suicidio ritual japonés por desentrañamiento',
    answered: false,
  },
  {
    letter: 'i',
    answer: 'iglesia',
    question: 'CON LA I. Templo cristiano',
    answered: false,
  },
  {
    letter: 'j',
    answer: 'jabali',
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    answered: false,
  },
  {
    letter: 'k',
    answer: 'kamikaze',
    question:
      'CON LA K. Persona que se juega la vida realizando una acción temeraria',
    answered: false,
  },
  {
    letter: 'l',
    answer: 'licantropo',
    question: 'CON LA L. Hombre lobo',
    answered: false,
  },
  {
    letter: 'm',
    answer: 'misantropo',
    question:
      'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas',
    answered: false,
  },
  {
    letter: 'n',
    answer: 'necedad',
    question: 'CON LA N. Demostración de poca inteligencia',
    answered: false,
  },
  {
    letter: 'o',
    answer: 'orco',
    question:
      'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien',
    answered: false,
  },
  {
    letter: 'p',
    answer: 'protoss',
    question:
      'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft',
    answered: false,
  },
  {
    letter: 'q',
    answer: 'queso',
    question:
      'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche',
    answered: false,
  },
  {
    letter: 'r',
    answer: 'raton',
    question: 'CON LA R. Roedor',
    answered: false,
  },
  {
    letter: 's',
    answer: 'stackoverflow',
    question: 'CON LA S. Comunidad salvadora de todo desarrollador informático',
    answered: false,
  },
  {
    letter: 't',
    answer: 'terminator',
    question:
      'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984',
    answered: false,
  },
  {
    letter: 'u',
    answer: 'unamuno',
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    answered: false,
  },
  {
    letter: 'v',
    answer: 'vikingos',
    question:
      'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa',
    answered: false,
  },
  {
    letter: 'w',
    answer: 'sandwich',
    question:
      'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso',
    answered: false,
  },
  {
    letter: 'x',
    answer: 'botox',
    question: 'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética',
    answered: false,
  },
  {
    letter: 'y',
    answer: 'peyote',
    question:
      'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos',
    answered: false,
  },
  {
    letter: 'z',
    answer: 'zen',
    question:
      'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional',
    answered: false,
  },
];

let counter = 0;
let correctas = 0;
let incorrectas = 0;
let answeredArray = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

const startGame = (event) => {
  //los manejadores de eventos para llamar a las funciones se recomienda que se llamen handle
  // event.preventDefault();
  // no se hace preventDefault porque es un evento click que no hace nada
  // const dom = document;
  const letterElement = document.querySelector('.write-question');
  letterElement.textContent = questions[0].question;
  //mejor usar innerHTML porque hacce lo mismo pero puede modificar elementos (Ej: poner el texto en negrita) lo parsea
  pasapalabraElement.removeAttribute('disabled');
  //aquí por CSS habría que poner dos estilos para que el usuario vea que está disables y cuando no
  pasapalabraElement.classList.remove('hidden'); // Como añadir y quitar clases de CSS desde Javascript
};

const showquestions = () => {
  if (answeredArray[counter] === false) {
    const letterElement = document.querySelector('.write-question');
    letterElement.textContent = questions[counter].question;
  } else {
    if (counter === 25) {
      counter = 0;
    } else {
      counter += 1;
    }
    showquestions();
  }
};

const sendAnswer = (event) => {
  event.preventDefault();
  const form = event.target;
  if (form[0].value === '') {
    console.log('Debes dar respuesta');
    console.dir(form);
    sendAnswer();
  } else if (form[0].value === questions[counter].answer) {
    console.log('Respuesta Correcta');
    correctas += 1;
    form.reset();
    document.querySelector('.correct-answers').textContent = correctas;
    answeredArray[counter] = true;
    if (counter === 25) {
      counter = 0;
    } else {
      counter += 1;
    }
    if (answeredArray.every((answerx) => answerx === true)) {
      const letterElement = document.querySelector('.write-question');
      endGame();
    } else {
      showquestions();
    }
  } else {
    console.log('Respuesta incorrecta');
    incorrectas += 1;
    form.reset();
    document.querySelector('.incorrect-answers').textContent = incorrectas;
    answeredArray[counter] = true;
    console.log(answeredArray);
    if (counter === 25) {
      counter = 0;
    } else {
      counter += 1;
    }
    if (answeredArray.every((answerx) => answerx === true)) {
      const letterElement = document.querySelector('.write-question');
      endGame();
    } else {
      showquestions();
    }
  }
};

const passWord = () => {
  console.log('hola');
  if (counter === 25) {
    counter = 0;
  } else {
    counter += 1;
  }
  showquestions();
};

const endGame = () => {
  sendAnswerElement.style.display = 'none';
  pasapalabraElement.style.display = 'none';
  endGameElement.style.display = 'none';
  startElement.style.display = 'none';
  const restartButton = document.querySelector('.restart-button');
  restartButton.removeAttribute('disabled');
};

/* const reStartGame = () => {
    counter = 0;
    correctas = 0;
    incorrectas = 0;
    answeredArray = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    sendAnswerElement.style.display = 'block'; 
    pasapalabraElement.style.display = 'block'; 
    startGame();
} */

const startElement = document.querySelector('.start-button');
startElement.addEventListener('click', startGame);

const sendAnswerElement = document.querySelector('form');
sendAnswerElement.addEventListener('submit', sendAnswer);

const pasapalabraElement = document.querySelector('.pasapalabra-button');
pasapalabraElement.addEventListener('click', passWord);
// pasapalabraElement.setAttribute('disabled', 'true');
// para poner un botón disabled para que al poner pasapalabra de primeras no me haga el pasapalabra
pasapalabraElement.classList.add('hidden');
// para añadir una clase desde JS, antes tengo que tener la clase en CSS

const endGameElement = document.querySelector('.end-button');
endGameElement.addEventListener('click', endGame);

/* const reStartElement = document.querySelector('.reestart-button') 
endGameElement.addEventListener('click',reStartGame) */
