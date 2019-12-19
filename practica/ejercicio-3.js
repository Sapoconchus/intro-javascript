class Game {

	constructor() {

		this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.suits = ["S", "C", "H", "D"];
		this.playBook = ["pair", "two pairs", "three of a kind", "straight", "flush", "full house", "four of a kind", "straight flush"];
	}

	createDeck() {

		let deck = [];

		for (let i = 0; i < this.cardValues.length; i++) {
			for(let j = 0; j < this.suits.length; j++) {
				deck.push(this.cardValues[i].concat(this.suits[j]));
			}
		}

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

	drawCards(deck, numberOfCards) {

		let hand = []

		for( let i= 0; i < numberOfCards; i++) {

			hand.push(deck.shift())
		}

		return hand
	}

	checkHand(hand) { 
	//hand = drawCards(createDeck(), 5)

	//1. order the hand getting the keys of the hand and check them agaisnt the keys of cardValues.

	let indexedValues = [];
	let indexedHand = [];
	let suitedHand = [];
	
	for(let i = 0; i<hand.length; i++) {

		indexedValues.push(this.cardValues.indexOf(hand[i].slice(0,1)));
		suitedHand.push(hand[i].slice(-1));

		indexedHand.push(this.cardValues.indexOf(hand[i].slice(0,1)) + hand[i].slice(-1));
	}

	//2. turning the hand into an indexed array and ordering it

	let orderedIndexValues = indexedValues.sort((a, b) => a - b )

	//3. evaluating hand and returning the higher play STILL NOT WORKING

	let straightFlush = isStraightFlush(suitedHand, orderedIndexValues, indexedHand); //return true or false

	let repeatGame = isRepeated(orderedIndexValues) // returns pairs, two pairs, thee of a kind, full house, four of a kind or no game
	
	let Straight = isStraight(orderedIndexValues) // returns true or false

	let game;

	if (straightFlush) {
		game = StraightFlush
	} else if (repeatGame === "Full House") {
		game = repeatGame;
	} else if (straight) {
		game = Straight;
	} else if (repeatGame) {
		game = repeatGame
	} else {
		game = "no game"
	}
}

	isStraight (ordered) {
	
	let straight;
	
	for(let i = 0; i < ordered.length-1; i++) {
		(ordered[i] === ordered[i+1]-1)? straight = "Straight" : straight = false;
		if(!straight) return false;
		
		//console.log(`i es ${ordered[i]} y +1 es ${ordered[i+1]-1}`)
	}
	return straight;//returns straight
}

	isStraightFlush (suited, ordered, isStraight) {
	
	let flush;

	for(let i = 0; i < suited -1; i++ ) {
		(suited[i] === suited[i+1]) ? flush = true : flush = false;
		if(!flush) return false;
	}

	if(isStraight(ordered)) {
		return "Straight Flush"
	 } else { 
		flush = false; //returns Straight Flush
	 }
}

	isRepeated(ordered) { //returns pairs & double pairs/three & four of a kind / Full House

    let count = [];
	//uso del forEach fusilado de stackoverflow
    ordered.forEach(function (item) {
          if(!count[item])
              count[item] = 0;
            count[item] += 1;
        });

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

	game (hand1, hand2, playbook) {
	let player1 = checkHand(hand1);
	let player2 = checkHand(hand2);
}
}

const poker = new Game();

const deck = poker.createDeck();
console.log(deck);

const player1 = poker.drawCards(deck,5);
console.log(player1)

const player2 = poker.drawCards(deck,5);
console.log(player2)

poker.checkHand(player1);