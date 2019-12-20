const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
const cardKeys = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
const suits = ["S", "C", "H", "D"];
const playBook = ["no game", "Pairs", "Two pairs", "Three of a kind", "Straight", "Flush", "Full house", "Four of a kind", "Straight Flush"]

const createDeck = (valueArr, suitsArr) => {

	let deck = [];

	for (let i = 0; i < valueArr.length; i++) {
		for(let j = 0; j < suitsArr.length; j++) {
			deck.push(valueArr[i].concat(suitsArr[j]));
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

const drawCards = (deck, cards) => {

	let hand = []

	for( let i= 0; i < cards; i++) {

		hand.push(deck.shift())
	}

	return hand
}

const orderHand = (hand) => {

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

const checkHand = (hand, orderedHand) => {	
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

const isStraight = (ordered) => { //returns Straight or false
	
	let straight;
	
	for(let i = 0; i < ordered.length-1; i++) {
	
		(ordered[i] === ordered[i+1]-1)? straight = "Straight" : straight = false;
		if(!straight) return false;
	
	}

	return straight;//returns straight
}

const isStraightFlush = (suited, ordered, isStraight) => { //returns Straight Flush or false
	
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

const isRepeated = (ordered) => { //returns pairs || double pairs || three - four of a kind || Full House || false

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

// HERE STARTS THE GAME AS SUCH

const deck = createDeck(cardValues, suits);
const player1 = "juanito";
const player2 = "Manolito";


const playPoker = (player1, player2) => {

	const hand1 = drawCards(deck,5);
	const hand2 = drawCards(deck,5);
	const orderedHand1 = orderHand(hand1);
	const orderedHand2 = orderHand(hand2);
	const play1 = checkHand(hand1,orderedHand1);
	const play2 = checkHand(hand2,orderedHand2);

	//1. comparing the player's hand with the playbook and assigning it a value
	console.log( `${player1}'s hand is ${hand1} (${play1})`)
	console.log( `${player2}'s hand is ${hand2} (${play2})`)
	
	let scorePlayer1 = playBook.indexOf(play1);
	let scorePlayer2 = playBook.indexOf(play2);

	//2. sorting which hand has the higher game

	if(scorePlayer1 > scorePlayer2) {
		console.log(`${player1} Wins! ${play1} is better than ${play2}`)
	} else if(scorePlayer1 < scorePlayer2) {
		console.log(`${player2} Wins! ${play2} is better than ${play1}`)
	} else {
		console.log( "It's a draw!");
	}

	if(scorePlayer1 === scorePlayer2) {

	let drawWinner;

	for(let i = 4; i >= 0; i--) {
		if(orderedHand1[i] > orderedHand2[i]) {
			drawWinner = player1;
			break;
		} else if ( orderedHand2[i] > orderedHand1[i]){
			drawWinner = player2;
			break;
		}
	};
	console.log(`The player with the highest card and therefor the winner is ${drawWinner}`);
	}
}

playPoker(player1, player2);