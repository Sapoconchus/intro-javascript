

class Player {
		
	constructor(name) {
			this.name = name;
			this.hand = [];
			this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
			this.suits = ["S", "C", "H", "D"];
		}

	draw() {

		let num;
		let suit;

		for(let i = 0; this.cardValues.legth; i++) {
			num = this.cardValues[Math.floor(Math.random()*cardValues.length)];
			suit = this.suits[Math.floor(Math.random()*4)]
			this.hand.push(num.concat(suit));
			}

		}
	orderHand() {
		for(let i = 0; this.hand.length; i++){
			if (indexOf(this.hand[i]) !== "number") {

			}
		}
		//ordenarlas por el índice de los valores de cardValues ??

		//otra opción es numerar cardValues (de 2 a 14) para que las manos se ordenen de mayor a menor. Crear un método showHand() para que enseñe la mano traducida a J, Q, K, A
		// o esta traducción hacerla en la función game cuando devuelva quién ha ganado
	}

		

	play() {

		/*	for(let i = 0; this.hand.length; i++){
				
				let value = this.hand.findIndex(this.hand[i]);

				if (typeOf(this.hand[i][0]) !== "number") {

				}
		} */
			let sorted = this.hand.sort(a, b) {
				if (a[0] > b[0]) {
					return 1;
				} else if (a[0] < b[0]) {
					return -1;
				} else if ( a[0] === b[0]) {
					return 0
				}

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
		Y AHORA A BUSCAR parejas, trios, poker, full, etc

		//hacer un loop y con un método sacar cuantas veces se repite cada número en la mano?? asi sacas parejas, trios, full (una pareja + 1 trio) y poker
		//escalera --> if(todas son del mismo palo)  ==> loop (if carta[i+1] - carta[i] = 0 => let consecutiva ++) si consecutiva = 5 => escalera
		// si ni escalera, ni poker, ni full, ni trio ni pareja --> return array sorted
	}

}


/*
diccionario con valor de cada mano : {
	escalera de color: 0,
	repoker: 1,
	.
	.
	.
	pareja: "n"

}


1. crear class Player {
	array mano = [];
	draw() {
		array mano = []; (aquí o fuera del método?)
		for( longitud cartas baraja.length) {
			
			let numero = Math.floor(Math.random()*numero cartas baraja)
			let palo = Math.floor(Math.random()*4)
			
			if numero > 10 => J, Q o K


			palo.metodo(para que el número por la letra de su palo) => ¿Con un diccionario que saque key:value??)
			
			mano.push(numero.concat(palo));
		}
		return mano;
	}

	play() { para vcer cual es la mayor jugada
		
	this.mano.order(ordenar de mayor a menor) ¿Meterá las letras antes o después? 

	}

	order() {
		ordenar las cartas de mayor puntuación a menor, para validar si hay empate
	}
}

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