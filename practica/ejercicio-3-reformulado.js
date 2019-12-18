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


const checkHand = (hand) => {
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

console.log(`indexed Hand es ${indexedHand}`)
console.log(`indexed values es ${indexedValues}`)

	//2. comprobar, por orden de mayor a menor, qué jugada tengo

	let orderedIndexValues = indexedValues.sort((a, b) => a - b )

	console.log(`orderedIndexValues es ${orderedIndexValues}`)

	let orderedHand =[];
	// ahora con el indice ordenado, ordenar indexed hand siguiendo ese orden.
	//No se puede ordenar indexed hand directamente porque mete 11 como menor a 2 al ser string
	//pero indexedValues y orderedIndex son arrays de NUMEROS, así que se pueden ordenar.
	// con .find(valor de ordered list) en indexedHand y push en orderedHand??

		for(let i=0; i < indexedHand.length; i++){
	 
		//orderedHand.push
		console.log((indexedHand.find(element => orderedIndexValues[i]))) //no funciona. Si efectivamente necesito ordenarla, revisar.

		}

	//Para devolver la jugada que tienes
/*
	if (isStraightFlush(suitedHand, orderedIndexValues, indexedHand)) {

		return "straight Flush";
	
	} else if(isFourOfAKind(indexedHand)) {
		return " Four of a kind";
	} else if(FULLHOUSE(indexedHand, pairs, threes)) {
		return "Full House"
	} else if(isStraight(orderedIndexValues)) {
		return "Straight"
	} else if()
*/
}

const isStraight = (ordered) => {
	
	let straight;
	
	for(let i = 0; i < ordered.length-1; i++) {
		(ordered[i] === ordered[i+1]-1)? straight = true : straight = false;
		if(!straight) return false;
		
		//console.log(`i es ${ordered[i]} y +1 es ${ordered[i+1]-1}`)
	}
	return true;
}

const isStraightFlush = (suited, ordered, isStraight) => {
	
	let flush;

	for(let i = 0; i < suited -1; i++ ) {
		(suited[i] === suited[i+1]) ? flush = true : flush = false;
		if(!flush) return false;
	}

	(isStraight(ordered) ? : return true : return false;
}

const isFourOfAKind = () => {

}

console.log(isStraight([2, 3, 4, 5, 6]))
console.log(checkHand(player1, playbook));