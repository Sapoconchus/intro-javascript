const fooBarQuix = (num) => {

if (num > 100 || num <= 0 || typeof num !== "number") {
	console.log('Input not valid. Please introduce a number between 1 and 100');
	return;
}

for (i=1; i <= num; i++) {

	let response = "";


//checking if it is divisible by 3, 5 or 7 

	if(i % 3 === 0) {
		response += "foo";
	}
	if(i % 5 === 0) {
		response += "bar";
	}
	if(i % 7 === 0) {
		response += "quix";
	}

//searching for 3, 5, 7 on every digit

	let stringed = i.toString().split("");

		for (digit of stringed) {
			if (digit === "3") {
				response = response + "foo";
			} else if (digit === "5") {
				response = response + "bar";
			} else if (digit === "7") {
				response = response + "quix";
			}
		}


	if (response.length === 0) {
		response = i;
	}

	console.log( `${i} --> ${response}.`);
}
}

fooBarQuix(0);
fooBarQuix(15);
fooBarQuix(37);
fooBarQuix(75);
fooBarQuix(110);