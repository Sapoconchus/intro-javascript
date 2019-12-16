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

    let checker = true;
/*
    let I = 0;
    let X = 0;
    let C = 0;
    let M = 0;*/

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
            return checker; //falla en IV o XC... ¿por qué?
        }
    }
        //checking that I, X, C and M do not repeat more than thrice.

        for (let i = 0; i < numbersArray.length; i++) {

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
    }


return checker
}

console.log(romanChecker("VV"));
console.log(romanChecker("IL"));
console.log(romanChecker("IIII"));
console.log(romanChecker("XV"));
console.log(romanChecker("IV"));




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

       let M = num / 1000;
       let C = num / 100;
       let X = num / 10;
       let I = num;
    
       let romanized = [];
    
        if(M > 0) {
            for(let i = 0; i< Math.floor(M); i++){
                romanized.push("M")
            }
        }
        if( C >= 1) { 
            let roundedC = C - Math.floor(M)*10;
            if(roundedC >= 9) {
                romanized.push("CM");
            } else if(roundedC >= 8) {
                romanized.push("DCCC");
            } else if(roundedC >= 7) {
                romanized.push("DCC");
            } else if (roundedC >= 6) {
                romanized.push("DC");
            } else if (roundedC >= 5) {
                romanized.push("D");
            } else if (roundedC >= 4) {
                romanized.push("CD");
            } else if (roundedC >= 3) {
                romanized.push("CCC");
            } else if (roundedC >= 2) {
                romanized.push("CC");
            } else if (roundedC >= 1) {
                romanized.push("C");
            }
        }
        
        if( X >= 1) { 
           let roundedX = X - Math.floor(C)*10;
            if(roundedX >= 9) {
                romanized.push("XC");
            } else if(roundedX >= 8) {
                romanized.push("LXXX");
            } else if(roundedX >= 7) {
                romanized.push("LXX");
            } else if (roundedX >= 6) {
                romanized.push("LX");
            } else if (roundedX >= 5) {
                romanized.push("L");
            } else if (roundedX >= 4) {
                romanized.push("XL");
            } else if (roundedX >= 3) {
                romanized.push("XXX");
            } else if (roundedX >= 2) {
                romanized.push("XX");
            } else if (roundedX >= 1) {
                romanized.push("X");
            }
        }
    
        if( I >= 1) { 
           let roundedI = I - Math.floor(X)*10;
            if(roundedI >= 9) {
                romanized.push("IX");
            } else if(roundedI >= 8) {
                romanized.push("VIII");
            } else if(roundedI >= 7) {
                romanized.push("VII");
            } else if (roundedI >= 6) {
                romanized.push("VI");
            } else if (roundedI >= 5) {
                romanized.push("V");
            } else if (roundedI >= 4) {
                romanized.push("IV");
            } else if (roundedI >= 3) {
                romanized.push("III");
            } else if (roundedI >= 2) {
                romanized.push("II");
            } else if (roundedI >= 1) {
                romanized.push("I");
            }
        }
        let response = romanized.join(",");
        console.log(response)
    }  

    arabToRoman(1000);
    arabToRoman(43);
    arabToRoman(2825);

/*console.log(rabToRoman(0));
console.log(rabToRoman(1587));*/