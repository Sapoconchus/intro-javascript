const dictionary = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
}

// 1. conversor 

const romanToArab = (string) => {

    /* Firt I turn the roman into an array of arab numbers. Then I loop throught the array adding or sustracting
    depending on what the number does. If the number is preceeded and followed by higher numbers, it substracts.
    Otherwise, it adds. An easy way to convert them */

//puedo hacer un loop en el string para detectar si hay lowercases o caracteres no reconocidos. Para la v2

    let array = [];

  /*  for (char of string) {
    array.push(dictionary.indexOf(char)); //añado al array el índice del caracter de la string que me meten en la función
    }                       // indexOf no tira. Supongo que al ser el diccionario un objeto y no array*/

    //PLAN B a indexOf
/*
    for (arab of dictionary) {
        for(let i = 0; i<string.length; i++) {
            if (string[i] === arab) {
                array.push(arab);
            }
        }
    }*/

    //PLAN C 
   /* for (char in string) {
    array.push(dictionary[char]);
    }*/

TOCARÁ HACER DOS DICCIONARIOS, UNO LATIN-ARABE Y OTRO ARABE-LATIN, Y ACCEDER A TRAVÉS DE DICTIONARY[KEY]

// si el número tiene un númnero mayor a la izq y un número mayor a la derecha, RESTA
/*
    let convertedNumber = 0; //inicializas la variable en la que vas a ir sumando o restando el resultado del loop

    for (let i = array.length; i > 0; i--) { // así va de derecha a izquierda 
      if(array[i] < array[i-1] && array[i] < array[i+1]) {
        convertedNumber -= array[i] //nos aprovechamos de que Js sabe pasar string a number
         } else {
             convertedNumber += array[i]
            }
}

return convertedNumber*/

}
}

romanToArab("XIV");