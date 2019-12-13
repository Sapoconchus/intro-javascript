const fooBarQuix = (num) => {

if (num > 100 || num <= 0 || typeof num !== "number") {
	console.log("please introduce a number between 1 and 100");
	return;
}

for (i=1; i <= num; i++){

	let response = i;

//veo si el dígito es 3, 5 o 7 

	if (i === 3) {
		response = "foo";
	} else if(i === 5) {
		response = "bar";
	} else if(i === 7) {
		response = "quix";
	} else if(num > 9) {

		let stringed = i.split("");

		for (digit of stringed) {
			if (digit === "3") {
				response = response + "foo";
			} else if (digit === "5") {
				response = response + "bar";
			} else if (digit === "7") {
				response = response + "quix";
			}
		}
	}

//veo si el numero es divisible entre 3, 5 o 7 

	switch(i){

		case (i%3 === 0):
			response = response + "bar";
		case (i%5 === 0):
		response = response + "foo";
		case (i%7 === 0):
		response = response + "quix";
			break;
	}

	/*if (response.length = 0) {
		response = i;
	}*/

	console.log( `${i} --> ${response}.`);
}
}

//fooBarQuix(0);
fooBarQuix(1);
fooBarQuix(3);
fooBarQuix(5);
fooBarQuix(7);
fooBarQuix(9);
fooBarQuix(33);
fooBarQuix(35);
fooBarQuix(75);
fooBarQuix(110);

// if para descartar si tiene más de 100 caracteres, 0 caracteres o NaN
	// else
		// loop hasta que i = num
			//dentro del loop un switch en el que por cada caso añade la respuesta a  response (sin "break" para que evalue todas las opciones)
				// OLLO PIOLLO aquí los primeros cases tienen que ser los del último punto para que se pinte primero
		//retornamos respones	
}


const iterator = (num) => {

}