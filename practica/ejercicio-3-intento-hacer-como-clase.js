class Decker {
	constructor() {
		this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.suits = ["S", "C", "H", "D"];
	}

	createDeck () {

		let deck = [];
	
		for (let i = 0; i < this.valueArr.length; i++) {
			for(let j = 0; j < this.suitsArr.length; j++) {
				deck.push(this.valueArr[i].concat(this.suitsArr[j]));
			}
		}
			//I found this algorithm (Fisher-Yates) on stackOverflow
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
}



class Player {
	constructor	(name) {
		this.name = name
		this.deck = new Decker;
	}

	drawCards (cards) {
		let pokerDeck = deck.createDeck();
		let hand = []
	
		for( let i= 0; i < cards; i++) {
	
			hand.push(pokerDeck.shift())
		}
	
		return hand
	}
}




class Game {

	constructor() {
		this.player1 = new Player;
		this.player2 = new Player;
		this.hand1 = player1.draw(5);
		this.hand2 = player2.draw(5);
	}

	orderHand (hand) {

		//1. order the hand getting the keys of the hand and check them agaisnt the keys of cardValues.
		let indexedValues = [];
		let indexedHand = [];
		
		for(let i = 0; i < hand.length; i++) {
	
			indexedValues.push(cardValues.indexOf(hand[i].slice(0,1)));
			indexedHand.push(cardValues.indexOf(hand[i].slice(0,1)) + hand[i].slice(-1));
		}
		//2. turning the hand into an indexed array and ordering it	
	
			let orderedHand = indexedValues.sort((a, b) => a - b );
	
			return orderedHand;
		
	}

	checkHand (hand, orderedHand) {	
		let suitedHand = [];
		
		for(let i = 0; i < hand.length; i++) {
			suitedHand.push(hand[i].slice(-1));
		}
	
		let straightFlush = isStraightFlush(suitedHand, orderedHand, isStraight); //return true or false
	
		let repeatGame = isRepeated(orderedHand) // returns pairs, two pairs, thee of a kind, full house, four of a kind or no game
		
		let straight = isStraight(orderedHand) // returns true or false
	
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
	
		return game;
	}
	
	isStraight (ordered) { //returns Straight or false
		
		let straight;
		
		for(let i = 0; i < ordered.length-1; i++) {
		
			(ordered[i] === ordered[i+1]-1)? straight = "Straight" : straight = false;
			if(!straight) return false;
		
		}
	
		return straight;//returns straight
	}
	
	isStraightFlush (suited, ordered, isStraight) { //returns Straight Flush or false
		
		let flush;
	
		for(let i = 0; i < suited.length -1; i++ ) {
			(suited[i] === suited[i+1]) ? flush = true : flush = false;
			if(!flush) return false;
		}
	
		if (isStraight(ordered)) {
		 return "Straight Flush"
		} else {
		return false; 
		}
	}
	
	isRepeated (ordered) { //returns pairs || double pairs || three - four of a kind || Full House || false
	
		let count = [];
		//this forEach block copied from stackoverflow
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
			return "Pairs"
		} else {
			return false;
		}
	}
}

const pokerGame = new Game();

console.log(pokerGame(player1.draw(5))); //Nope, It doesn't work like that

