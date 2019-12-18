

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


const arabToRoman = (num) => {

    if (num > 3999 || num < 1) {
    
        console.log("please introduce a number between 1 and 3999")
    }; 

       let M = num / 1000;
       let C = num / 100;
       let X = num / 10;
       let I = num;
    
       let romanized = [];
    
        if(M > 0) {
            for(let i = 0; i< Math.floor(M); i++){
                romanized.push("M")
            }
        }
        if( C >= 1) { 
            let roundedC = C - Math.floor(M)*10;
            if(roundedC >= 9) {
                romanized.push("CM");
            } else if(roundedC >= 8) {
                romanized.push("DCCC");
            } else if(roundedC >= 7) {
                romanized.push("DCC");
            } else if (roundedC >= 6) {
                romanized.push("DC");
            } else if (roundedC >= 5) {
                romanized.push("D");
            } else if (roundedC >= 4) {
                romanized.push("CD");
            } else if (roundedC >= 3) {
                romanized.push("CCC");
            } else if (roundedC >= 2) {
                romanized.push("CC");
            } else if (roundedC >= 1) {
                romanized.push("C");
            }
        }
        
        if( X >= 1) { 
           let roundedX = X - Math.floor(C)*10;
            if(roundedX >= 9) {
                romanized.push("XC");
            } else if(roundedX >= 8) {
                romanized.push("LXXX");
            } else if(roundedX >= 7) {
                romanized.push("LXX");
            } else if (roundedX >= 6) {
                romanized.push("LX");
            } else if (roundedX >= 5) {
                romanized.push("L");
            } else if (roundedX >= 4) {
                romanized.push("XL");
            } else if (roundedX >= 3) {
                romanized.push("XXX");
            } else if (roundedX >= 2) {
                romanized.push("XX");
            } else if (roundedX >= 1) {
                romanized.push("X");
            }
        }
    
        if( I >= 1) { 
           let roundedI = I - Math.floor(X)*10;
            if(roundedI >= 9) {
                romanized.push("IX");
            } else if(roundedI >= 8) {
                romanized.push("VIII");
            } else if(roundedI >= 7) {
                romanized.push("VII");
            } else if (roundedI >= 6) {
                romanized.push("VI");
            } else if (roundedI >= 5) {
                romanized.push("V");
            } else if (roundedI >= 4) {
                romanized.push("IV");
            } else if (roundedI >= 3) {
                romanized.push("III");
            } else if (roundedI >= 2) {
                romanized.push("II");
            } else if (roundedI >= 1) {
                romanized.push("I");
            }
        }
        let response = romanized.join(",");
        console.log(response)
    }  

    arabToRoman(1000);
    arabToRoman(43);
    arabToRoman(2825);
