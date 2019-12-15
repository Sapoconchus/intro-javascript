// Probar a hacerlo dentro de una clase y cada función un método

//pasar el checker antes de convertir nada en el romanToArab

const romans = ["I", "V", "X", "L", "C", "D", "M"];
const arabs = [1, 5, 10, 50, 100, 500, 1000];

const romanToArab = (string) => {

    const numbersArray = [];

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

//metodo para ver si se repite uno de los carácteres más de tres veces ( ¿.filter?)
// para el orden de los elementos, con los operadores [i] [i+1] 
// ejemplo:(if arr[i] === "V/L/D" &&& arr[i+1] === "caracteres superiores") { pintar error} 
//poner una variable "checker" como true. Si algún comprobador salta, pasarlo a false y parar el if retornando el checker.

}


romanToArab("III");
romanToArab("XIV");
romanToArab("XV");
romanToArab("XVI");
romanToArab("XX");