const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const cardKeys = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
const suits = ["S", "C", "H", "D"];
const playbook = ["pair", "two pairs", "three of a kind", "straight", "flush", "full house", "four of a kind", "straight flush"]

const createDeck = (valueArr, suitsArr) => {

	let deck = [];

	for (i = 0; i < valueArr.length; i++) {
		for(j = 0; j < suitsArr.length; j++) {
			deck.push(valueArr[i].concat(suitsArr[j]));
		}
	}

	return deck;
}

//const orderedDeck = createDeck(cardKeys, suits);

const deck = createDeck(cardValues, suits);

const shuffleDeck = (deck) => { //I found this algorithm (Fisher-Yates) on stackOverflow
	let currentIndex = deck.length, tempValue, randIndex;

	while ( currentIndex !== 0) {
		randIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --

		tempValue = deck[currentIndex];
		deck[currentIndex] = deck[randIndex];
		deck[randIndex] = tempValue;
	}

	return deck;
}

const shuffledDeck = shuffleDeck(deck);

const drawCards = (deck, cards) => {

	let hand = []

	for( let i= 0; i < cards; i++) {

		hand.push(deck.shift())
	}

	return hand
}

const player1 = drawCards(shuffledDeck, 5);
const player2 = drawCards(shuffledDeck, 5);


const checkHand = (hand, rules) => {
	console.log(`la mano es ${hand}`)
	//1. order the hand getting the keys of the hand and check them agaisnt the keys of cardValues.
	let indexedValues = [];
	let indexedHand = [];
	let suitedHand = [];
	
	for(let i = 0; i<hand.length; i++) {

		indexedValues.push(cardValues.indexOf(hand[i].slice(0,1)));
		suitedHand.push(hand[i].slice(-1));

		indexedHand.push(cardValues.indexOf(hand[i].slice(0,1)) + hand[i].slice(-1));
	}

/*console.log(`indexed Hand es ${indexedHand}`)
console.log(`indexed values es ${indexedValues}`)
console.log(typeof indexedValues[1]);*/

	//2. comprobar, por orden de mayor a menor, qué jugada tengo

	let orderedindex = indexedValues.sort(function (a, b) {
			if (a[0] > b[0]) {
				return 1;
			} else if (a[0] < b[0]) {
				return -1;
			} else if ( a[0] === b[0]) {
				return 0
			}
	})

	// ahora con el indice ordenado, ordenar indexed hand siguiendo ese orden.
	//No se puede ordenar indexed hand directamente porque mete 11 como menor a 2 al ser string
	//pero indexedValues y orderedIndex son arrays de NUMEROS, así que se pueden ordenar.
	// con .find(valor de ordered list) en indexedHand y push en orderedHand??
loop
	 orderedHand.push(indexedValues.findIndex(orderedIndex[i]) --> algo asi


	return orderedHand;

	// hand=player1 y rules=playbook
}

console.log(checkHand(player1, playbook));