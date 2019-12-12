//ejercicio 1
/*
const cleanSpaces = (str) => {
    let string = "";

    for(let i=0; i<str.length; i++){
        if(str[i] !== " ") {
            string += (str[i]);
        }
    }
    console.log(string)
}


cleanSpaces("H    o  l a mundo ");


//ejercicio 2

const sumString = (arr) => {

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "number") {
           // console.log(`is number ${arr[i]}`)
            sum += arr[i];
        } else {
            let convertedNumber = parseInt(arr[i]);
            sum -= convertedNumber;
          //  console.log(`not number ${arr[i]}`)
        }
    }
    console.log(sum);
};

sumString([1, 2, "3", 4]);

//ejercicio 3


const arrayLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]

const sumLetters = (str) => {

    let sumTot = 0;

    for (let i = 0; i<str.length; i++){
        //console.log(str[i]);
        //console.log(arrayLetters.indexOf(str[i]));
        let value = arrayLetters.indexOf(str[i]) + 1;
        sumTot += value;
    }
return sumTot;
}

console.log(sumLetters("aa"));
console.log(sumLetters("ba"));
console.log(sumLetters("cca"));
console.log(sumLetters("bba"));
*/
// ejercicio 4

const passChecker = (str) => {

    let lowerCase = 0;
    let upperCase = 0;
    let isNumber = 0;
    let isSpecial = 0;
    let blank = 0;
    let result = 0;

    for(char of str) {
        console.log(char);
        console.log(typeof char);

        if ( char == parseInt(char)) {
            isNumber ++;
        } else if (char === " ") {
            blank ++;
        } else if (char == char.toUpperCase()) {
            upperCase ++;
        } else if (char == char.toLowerCase()){
            lowerCase ++;
        } else if( char === "$" || char === "/") { //etc
            lowerCase +=2;
        }
    }

    if (lowerCase > 0) {
        result ++
    };
    if ( upperCase > 0) {
        result ++
    };
    if ( isNumber > 0) {
        result ++
    };
    if (isSpecial > 0) {
        result ++
    }; 
    if( blank > 0) {
        result ++
    };

    return result;
}

console.log(passChecker("ho la"));
console.log(passChecker("hOlA"));
console.log(passChecker("Hol4"));
console.log(passChecker("ho.la"));



        /*
                switch (typeof char {
            case "number":
            score ++;
            case  (character == character.toUpperCase())
            score ++;
    }*/