

class Game {

	constructor {

		this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.suits = ["S", "C", "H", "D"];
		this.playBook = ["pair", "two pairs", "three of a kind", "straight", "flush", "full house", "four of a kind", "straight flush"];
	}

	 createDeck () {

	let deck = [];

	for (i = 0; i < this.cardValues.length; i++) {
		for(j = 0; j < this.suits.length; j++) {
			deck.push(this.cardValues[i].concat(this.suits[j]));
		}
	}

	return deck;
}
	//I found this algorithm (Fisher-Yates) on stackOverflow
    
	

    shuffleDeck (deck) { 
		
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

	drawCards(deck, cards) {

		let hand = []

		for( let i= 0; i < cards; i++) {

			hand.push(deck.shift())
		}

		return hand
	}	


}

