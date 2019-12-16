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

    let I = 0;
    let X = 0;
    let C = 0;
    let M = 0;

    for (let i = 0; i < numbersArray.length -1; i++) {
        //checking that  V, L and D do not repeat nor precede a higher number)
        if(numbersArray[i] === 5 || numbersArray[i] === 50 || numbersArray[i] === 500 && numbersArray[i] <= numbersArray[i+1]) {
            console.log(`the status of ${numbersArray[i]} is false on step 1`)
            checker = false;
            return checker;
        } else if (numbersArray[i] < numbersArray[i+1]) { // checking that I, X and C behave properly when substracting.
            (str[i] === "I" && str[i+1] !== "V" || str[i+1] !== "X") ? checker = false : checker = true;
            (str[i] === "X" && str[i+1] !== "L" || str[i+1] !== "C") ? checker = false : checker = true;
            (str[i] === "C" && str[i+1] !== "D" || str[i+1] !== "M") ? checker = false : checker = true;
            console.log(`the status of ${numbersArray[i]} is false on step 2`);
            return checker;
        }
        //checking that I, X, C and M do not repeat more than thrice.
        if (str[i] === "I") {
            I++;
            console.log(I);
        } else if(str[i] === "X") {
            X++;
            console.log(X);
        } else if(str[i] === "C") {
            C++;
            console.log(C);
        } else if(str[i] === "M") {
            M++;
            console.log(M);
        }

        ( I > 3 || X > 3 || C > 3 || M > 3 ) ? checker = false : checker = true;
    }
    if(checker) {
        return true
    } else {
        return false};
}

console.log(romanChecker("VV"));
console.log(romanChecker("IL"));
console.log(romanChecker("IIII"));
console.log(romanChecker("XVI"));
console.log(romanChecker("MMDCCCXXVI"));

/*
romanToArab("III");
romanToArab("XIV");
romanToArab("XV");
romanToArab("XVI");
romanToArab("XX");
*/

const arabToRoman = (num) => {
    
}




if(numerico[1] > numerico[2]) { 
    console.lof("mayor")
} else if(numerico[1] < numerico[2]){ 
    console.log("menor")
}