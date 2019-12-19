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
console.log(player1);

const checkHand = (hand) => {

	//1. order the hand getting the keys of the hand and check them agaisnt the keys of cardValues.
	let indexedValues = [];
	let indexedHand = [];
	let suitedHand = [];
	
	for(let i = 0; i<hand.length; i++) {

		indexedValues.push(cardValues.indexOf(hand[i].slice(0,1)));
		suitedHand.push(hand[i].slice(-1));

		indexedHand.push(cardValues.indexOf(hand[i].slice(0,1)) + hand[i].slice(-1));
	}

	//2. turning the hand into an indexed array and ordering it

	let orderedIndexValues = indexedValues.sort((a, b) => a - b )

	console.log(`orderedIndexValues es ${orderedIndexValues}`)

	/*let orderedHand =[];

		for(let i=0; i < indexedHand.length; i++){
	 
		//orderedHand.push
		console.log((indexedHand.find(element => orderedIndexValues[i]))) //no funciona. Si efectivamente necesito ordenarla, revisar.

		}*/

	//Para devolver la jugada que tienes

	let straightFlush = isStraightFlush(suitedHand, orderedIndexValues, indexedHand); //return true or false

	let repeatGame = isRepeated(orderedIndexValues) // returns pairs, two pairs, thee of a kind, full house, four of a kind or no game
	
	let straight = isStraight(orderedIndexValues) // returns true or false

	let game;

	if (straightFlush) {
		game = straightFlush
	} else if (repeatGame === "Full House") {
		game = repeatGame;
	} else if (straight) {
		game = straight;
	} else if (repeatGame) {
		game = repeatGame
	} else {
		game = "no game"
	}

}

const isStraight = (ordered) => {
	
	let straight;
	
	for(let i = 0; i < ordered.length-1; i++) {
		(ordered[i] === ordered[i+1]-1)? straight = "Straight" : straight = false;
		if(!straight) return false;
		
		//console.log(`i es ${ordered[i]} y +1 es ${ordered[i+1]-1}`)
	}
	return straight;//returns straight
}

const isStraightFlush = (suited, ordered, isStraight) => {
	
	let flush;

	for(let i = 0; i < suited -1; i++ ) {
		(suited[i] === suited[i+1]) ? flush = true : flush = false;
		if(!flush) return false;
	}

	(isStraight(ordered)) ? : return "Straight Flush" : return false; //returns Straight Flush
}

const isRepeated = (ordered) => { //returns pairs & double pairs/three & four of a kind / Full House

    let count = [];
	//uso del forEach fusilado de stackoverflow
    ordered.forEach(function (item) {
          if(!count[item])
              count[item] = 0;
            count[item] += 1;
        })
   let pairs = 0;
   let four = 0;
   let three= 0;

    for(number of count) {

    	if (number >= 4) four ++;
    	if (number >= 2) pairs ++;
    	if (number >= 3) three ++;
    }

    if(four > 0) {
    	return "Four of a kind"
    } else if (three === 1 && pairs > 1) {
    	return "Full House"
    } else if ( three === 1) {
    	return "Three of a kind"
    } else if (pairs === 2) {
    	return "Two pairs"
    } else if (pairs === 1) {
    	return "pairs"
    } else {
    	return false;
    }
}

const game = (hand1, hand2, playbook) => {
	let player1 = checkHand(hand1);
	let player2 = checkHand(hand2);


}

console.log(checkHand(player1));
