// Probar a hacerlo dentro de una clase y cada función un método

const romans = ["I", "V", "X", "L", "C", "D", "M"];
const arabs = [1, 5, 10, 50, 100, 500, 1000];

let romanToArab = (string) => {

    const numbersArray = [];

    for(let i=0; i<string.length; i++){
       let index= romans.indexOf(string[i]); // push into numbersArray the item in romans array = index of the roman array of the string character (i)
       let arabTransformed = arabs[index]
       numbersArray.push(arabTransformed);
    }

    //now we have an array of numbers ie [10, 1, 5]

    let convertedNumber = 0; //inicializas la variable en la que vas a ir sumando o restando el resultado del loop

    for (let i = numbersArray.length; i > 0; i--) { // así va de derecha a izquierda 
      if(numbersArray[i+1] === "undefined") {
          convertedNumber += numbersArray[i];
      } else if (numbersArray[i+1] > numbersArray[i]) {
          convertedNumber -= numbersArray[i]
      } else {
          convertedNumber += numbersArray[i]
      }
    }
}
          
        
      /*  numbersArray[i] < numbersArray[i-1] && numbersArray[i] < numbersArray[i+1]) {
        convertedNumber -= numbersArray[i]
         } else if()
             convertedNumber += numbersArray[i]
            }*/

    console.log(convertedNumber);
}

romanToArab("XIV");