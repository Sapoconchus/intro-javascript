

class Player {
		
	constructor(name) {
			this.name = name;
			this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
			this.suits = ["S", "C", "H", "D"];
		}

	draw(numberOfCards) { //MECA que las cartas tienen que ser 52, no se puede hacer aleatorio
							// ya veremos cómo hacerlo. Primero resto de funcionalidad

		let num = 0;
		let suit;
		let hand = [];
		for(let i = 0; i < numberOfCards; i++) {
			num = this.cardValues[Math.floor(Math.random()*this.cardValues.length)];
			suit = this.suits[Math.floor(Math.random()*4)];
			hand.push(num.concat(suit));
			}
		//hand.forEach(card => (Card === hand))
		return hand;
		}
}

	/*	for(let i = 0; this.hand.length; i++){
				
				let value = this.hand.findIndex(this.hand[i]);

				if (typeOf(this.hand[i][0]) !== "number") {

				}
		} */
			
			//con ".sort(function(a, b))"
			
			/* el callback se haría así		
			function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
} */
		//Y AHORA A BUSCAR parejas, trios, poker, full, etc

		//hacer un loop y con un método sacar cuantas veces se repite cada número en la mano?? asi sacas parejas, trios, full (una pareja + 1 trio) y poker
		//escalera --> if(todas son del mismo palo)  ==> loop (if carta[i+1] - carta[i] = 0 => let consecutiva ++) si consecutiva = 5 => escalera
		// si ni escalera, ni poker, ni full, ni trio ni pareja --> return array sorted
	}

}
let juanito = new Player ("juanito");
let pepito = new Player ("pepito");

console.log(juanito.draw(5));
juanito.play();

class Game  {
	constructor (player1, player2) {
		this.player1 = player1.draw(5);
		this.player2 = player2.draw(5);
		this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
		this.suits = ["S", "C", "H", "D"];
		this.playBook = ["pair", "two pairs", "three of a kind", "straight", "flush", "full house", "four of a kind", "straight flush"];
	}

	compareHands(){
		// saco los valores del índice de cardValue de cada una de las manos. Para después ordenarla de mayor a menor y compararla
		let key1 = []
		for (values of this.hand1){
			key1.push(cardValues.indexOf(this.player1[value]);)
		}

		let key2 = []
		for (values of this.player2){
			key2.push(cardValues.indexOf(this.player2[value]);)
		}

		//ordenarlas por el índice de los valores de cardValues ??

		//otra opción es numerar cardValues (de 2 a 14) para que las manos se ordenen de mayor a menor. Crear un método showHand() para que enseñe la mano traducida a J, Q, K, A
		// o esta traducción hacerla en la función game cuando devuelva quién ha ganado

		let sorted = this.hand.sort(function (a, b) {
			if (a[0] > b[0]) {
				return 1;
			} else if (a[0] < b[0]) {
				return -1;
			} else if ( a[0] === b[0]) {
				return 0
			}

			//con ".sort(function(a, b))"
			
			/* el callback se haría así		
			function compare(a, b) {
  if (a es menor que b según criterio de ordenamiento) {
    return -1;
  }
  if (a es mayor que b según criterio de ordenamiento) {
    return 1;
  }
  // a debe ser igual b
  return 0;
} */

		})
	}
}


/*
2. const game = (player1, player) {
	
	const mano1 = player1.draw()
	const mano2 = player2.draw()

	const jugada1 = player1.play()
	const jugada2 = player2.play()

	if(keyOf.jugada1() > keyOf.jugada2()) {
		GANA JUGADOR 2  y pintar jugadas
	} else if( es MENOR) {
		GANA JUGADOR 1 y pintar jugadas
	} else {
		loop para comparar player1.order([1]) con player2.order([1]) para ir viendo quien gana en caso de empate. 
	}
}
*/


const game = (hand1, hand2) => {
	console.log(`las manos son ${hand1} y ${hand2}`);
}

game(juanito.draw(5), juanito.draw(5));



const poker = new Game (pepito, juanito);

poker.compareHands();
poker.repeatHands();