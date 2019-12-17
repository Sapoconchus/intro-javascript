

class Player ("name") {
		
		constructor() {
			this.hand = [];
			this.cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
			this.suits = ["S", "C", "H", "D"];
		}

	draw() {
		console.log("hola")
	}

	play() {

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