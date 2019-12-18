const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["S", "C", "H", "D"];

const createDeck = (valueArr, suitsArr) => {

	let deck = [];

	for (i = 0; i < valueArr.length; i++) {
		for(j = 0; j < suitsArr.length; j++) {
			deck.push(valueArr[i].concat(suitsArr[j]));
		}
	}

	return deck;
}

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

const drawCards = (deck) => {

	let hand = []
}