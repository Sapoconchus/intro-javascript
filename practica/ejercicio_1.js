

const fooBarQuix = (num) => {

let response = "";

if (num > 100 || num <= 0 || typeof num !== "number") {
	return "please introduce a number between 1 and 100";
}

for (i=0; i < num; i++){
	switch(i){
		case (i%3 === 0):
			response = response + "foo";
			break;
		case (i%5 === 0)
		response = response + "foo";
			break;
	}
}



// if para descartar si tiene más de 100 caracteres, 0 caracteres o NaN
	// else
		// loop hasta que i = num
			//dentro del loop un switch en el que por cada caso añade la respuesta a  response (sin "break" para que evalue todas las opciones)
				// OLLO PIOLLO aquí los primeros cases tienen que ser los del último punto para que se pinte primero
		//retornamos respones	
}