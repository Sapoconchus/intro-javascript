// Probar a hacerlo dentro de una clase y cada función un método

//pasar el checker antes de convertir nada en el romanToArab

const romans = ["I", "V", "X", "L", "C", "D", "M"];
const arabs = [1, 5, 10, 50, 100, 500, 1000];

const romanToArab = (string) => {

    let numbersArray = [];

    for(let i=0; i<string.length; i++){

      /* let index= romans.indexOf(string[i]); // push into numbersArray the item in romans array = index of the roman array of the string character (i)
       numbersArray.push = arabs[index] }*/

        numbersArray.push(arabs[romans.indexOf(string[i])]);
    }

    let convertedNumber = 0; 

    for (let i = numbersArray.length-1; i >= 0; i--) {
     
      if(numbersArray[i+1] === "undefined") {
          convertedNumber += numbersArray[i];
      } else if (numbersArray[i+1] > numbersArray[i]) {
          convertedNumber -= numbersArray[i]
      } else {
          convertedNumber += numbersArray[i]
      }

    }
 console.log(convertedNumber);
}


const romanChecker = (string) => {

    let str = string.toUpperCase();
    let numbersArray = [];

    for(let i=0; i<string.length; i++){
  
        numbersArray.push(arabs[romans.indexOf(string[i])]);
    }

    let checker;
/*
    let I = 0;
    let X = 0;
    let C = 0;
    let M = 0;*/

    for (let i = 0; i < numbersArray.length; i++) {
        //checking that  V, L and D do not repeat nor precede a higher number)
        if(numbersArray[i] === 5 || numbersArray[i] === 50 || numbersArray[i] === 500 && numbersArray[i] <= numbersArray[i+1]) {
            checker = false;
            return checker;
        } else if (numbersArray[i] < numbersArray[i+1]) { // checking that I, X and C behave properly when substracting.
            (str[i] === "I" && str[i+1] !== "V" || str[i+1] !== "X") ? checker = false : checker = true;
            (str[i] === "X" && str[i+1] !== "L" || str[i+1] !== "C") ? checker = false : checker = true;
            (str[i] === "C" && str[i+1] !== "D" || str[i+1] !== "M") ? checker = false : checker = true;
            return checker;
        }
        //checking that I, X, C and M do not repeat more than thrice.

        // VALIDAR!!!

        if (str[i] === "I" && str[i+1] === "I" && str[i+2] === "I" && str[i+3] === "I") {
            checker = false;
            return checker;
        } else if(str[i] === "X" && str[i+1] === "X" && str[i+2] === "X" && str[i+3] === "X") {
            checker = false;
            return checker;
        } else if(str[i] === "C" && str[i+1] === "C" && str[i+2] === "C" && str[i+3] === "C") {
            checker = false;
            return checker;
        } else if(str[i] === "M" && str[i+1] === "M" && str[i+2] === "M" && str[i+3] === "M") {
            checker = false;
            return checker;
        }

        ( I > 2 || X > 2 || C > 2 || M > 2 ) ? checker = false : checker = true;
    }
    if(checker) {
        return true
    } else {
        return false};
}
/*
console.log(romanChecker("VV"));
console.log(romanChecker("IL"));
console.log(romanChecker("IIII"));
*/
/*
romanToArab("III");
romanToArab("XIV");
romanToArab("XV");
romanToArab("XVI");
romanToArab("XX");
*/

const arabToRoman = (num) => {

if (num > 3999 || num < 1) {

	console.log("please introduce a number between 1 and 3999")
};

    let string = "";
    let next;
// ESTO NO VA A FUNCIONAR PORQUE LA MISMA CONDICION PUEDE ENTRAR POR VARIOS SITIOS. POR EJEMPLO, 1.005 SIGUE ENTRANDO POR EL SEGUNDO IF

//falta el si es mayor de 3.000  ---  ¿No sería "num % 1000 !== 0"?
    if (num >= 1000) {
        string.push("M");
        (1000 % num !== 0) ? next = num-1000 : return string; //bajamos a centenas
    } else if (num >= 900 || next >= 900) {
        string.push("CM");
        (900 % num !== 0) ? next -= 900 : return string; //bajamos a decenas
    } else if (num >= 500 || next >= 500) {
        string.push("D");
        (500 % num !== 0) ? next = num-500 : return string; //bajamos a decenas
    } else if (num >= 400 || next >= 400) {
        string.push("CD");
        (400 % num !== 0) ? next = num-400 : return string; //bajamos a decenas
    } else if (num >= 300 || next >= 300) {
        string.push("CCC");
        (300 % num !== 0) ? next = num-300 : return string; //bajamos a decenas
    } else if (num >= 200 || next >= 200) {
        string.push("CC");
        (200 % num !== 0) ? next = num-200 : return string; //bajamos a decenas
    } else if (num >= 100 || next >= 100) {
        string.push("C");
        (100 % num !== 0) ? next = num-100 : return string; //bajamos a decenas
    } else if (num >= 90 || next >= 90) {
        string.push("XC");
        (90 % num !== 0) ? next = num-90 : return string; //bajamos a unidades
    } else if (num >= 50 || next >= 50) {
        string.push("L");
        (50 % num !== 0) ? next = num-50 : return string; //bajamos a unidades
    } else if (num >= 40 || next >= 40) {
        string.push("XL");
        (40 % num !== 0) ? next = num-40 : return string; //bajamos a unidades
    } else if (num >= 30 || next >= 30) {
        string.push("XXX");
        (30 % num !== 0) ? next = num-30 : return string; //bajamos a unidades
    } else if (num >= 20 || next >= 20) {
        string.push("XX");
        (20 % num !== 0) ? next = num-20 : return string; //bajamos a unidades
    } else if (num >= 10 || next >= 10) {
        string.push("X");
        (10 % num !== 0) ? next = num-10 : return string; //bajamos a unidades
    } else if (num >= 9 || next >= 9) {
        string.push("IX");
        (9 % num !== 0) ? next = num-9 : return string; //ending
    } else if (num >= 8 || next >= 8) {
        string.push("VIII");
        (8 % num !== 0) ? next = num-8 : return string; //ending
    } else if (num >= 5 || next >= 5) {
        string.push("V");
        (5 % num !== 0) ? next = num-5 : return string; //ending
    } else if (num >= 4 || next >= 4) {
        string.push("IV");
        (4 % num !== 0) ? next = num-4 : return string; //ending
    } else if (num >= 3 || next >= 3) {
        string.push("III");
        (3 % num !== 0) ? next = num-3 : return string; //ending
    } else if (num >= 2 || next >= 2) {
        string.push("II");
        (2 % num !== 0) ? next = num-2 : return string; //ending
    }else {
    	string.push("I");
    }


    /* DIVIDIR el número por cada cifra con simbolo repetible

		1955 --> MCMLV

	let M = 1955/1000(M) = 1.9 --> ponerla 1 vez y dividir entre si misma --> let intermedia =955
	
	let C = (1)955/100(C) =9.55 --> >= 9 que así que push.(CM) y resto --> let intermedia = 55

	let X =(19)55/10 = 5.5 --> >3 <9 así que push intermedia -> L y reto --> let intermedia = 5

	let I =(195)5/1 = 5 --> >3 <9 así que push intermedia --> V y resto --> let intermedia = 0 --> return

	*/







    return string;
}

console.log(rabToRoman(0));
console.log(rabToRoman(1587));