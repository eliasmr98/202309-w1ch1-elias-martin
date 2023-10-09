const createADeck = () => {
  const values = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['♥', '♦', '♠', '♣'];
  let cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const printedValue = values[v];
      const suit = suits[s];
      const realValue = v;
      cards.push({ printedvalue: printedValue, suit, realvalue: realValue });
    }
  }
  return cards;
};
// console.log(createADeck());

//Función para generar una carta random

const cards = createADeck();
const generateFirstCard = (cards) => {
  const random = Math.floor(Math.random() * 51);
  const randomCard = cards[random];
  return randomCard;
};
generateFirstCard(cards);

const machineCardGenerated = generateFirstCard(cards);

//Función que genera una segunda carta random

const generateSecondCard = (cards) => {
  const random2 = Math.floor(Math.random() * 51);
  const secondRandomCard = cards[random2];
  return secondRandomCard;
};
generateSecondCard(cards);

const yourCardGenerated = generateSecondCard(cards);

// console.log(secondCardGenerated);
// console.log(firstCardGenerated);

//Función que me compara las dos cartas

const comparesCards = (card1, card2) => {
  if (machineCardGenerated.realvalue === yourCardGenerated.realvalue) {
    return `Empate! tu carta ${yourCardGenerated.printedvalue}${yourCardGenerated.suit} es igual que la carta 
    ${machineCardGenerated.printedvalue}${machineCardGenerated.suit} `;
  }
  if (machineCardGenerated.realvalue > yourCardGenerated.realvalue) {
    return `Has perdido, tu carta ${yourCardGenerated.printedvalue}${yourCardGenerated.suit} es menor que la carta ${machineCardGenerated.printedvalue}${machineCardGenerated.suit} `;
  } else {
    return `Has ganado, tu carta ${yourCardGenerated.printedvalue}${yourCardGenerated.suit} es mayor que la carta ${machineCardGenerated.printedvalue}${machineCardGenerated.suit} `;
  }
};
console.log(comparesCards(machineCardGenerated, yourCardGenerated));
console.log('Machine value' + machineCardGenerated.realvalue);
console.log('Your value' + yourCardGenerated.realvalue);

//LA MIERDA DEL DOM

const mainFunction = () => {
  const dom = document;
  const randomCard = dom.querySelector('.card');
  const handleButtonClick = () => {
    randomCard.innerHTML = `${machineCardGenerated.printedvalue} ${machineCardGenerated.suit}`;
  };
  dom
    .querySelector('.initiate-button')
    .addEventListener('click', handleButtonClick);
};
mainFunction();
