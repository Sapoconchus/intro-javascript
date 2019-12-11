# Ejercicios de práctica
Estos ejercicios se explican con el propósito de mejorar las técnicas de programación y además aprender Javascript.

## Ejercicio 1: Eliminar espacios de una string

Dada una string, eliminar sus espacios, por ejemplo:

`h o l a = hola`
`pru e bad   ecosas -> pruebadecosas`

## Ejercicio 2: Divide y vencerás
Dado un array de números y de números en forma de string de la siguiente manera: `[1,2,"3",4]` se requiere que el resultado sea la suma de los valores que son números y se les reste los que son strings. 

Por ejemplo:

`[1,2,"3",4] -> 1 + 2 - 3 + 4 = 4`
`[1,"2",3,4] -> 1 - 2 + 3 - 4 = -2`

## Ejercicio 3: Love vs friendship

Teniendo el siguiente array en el código:
`["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]`

Se requiere que cuando se le pase una palabra como argumento se le dé un valor numérica a esta dependiendo de en qué posición esté la letra + 1, por ejemplo:
`aa = 1 + 1 = 2`
`ba = 2 + 1 = 3`
`cca = 3 + 3 + 1 = 5`

## Ejercicio 4: ¿Es segura tu contraseña?

A este programa le tendremos que pasar una string y dada las siguientes condiciones diremos iremos sumando puntos, dependiendo los que se consiga será una contraseña fuerte, media o débil:

- Tiene números: +1 punto
- Tiene letras minúsculas: +1 punto
- Tiene letras mayúsculas: +1 punto
- Tiene signos de puntuación (./*%$): + 2 puntos
- Tiene espacios en blanco: + 1 punto

Por ejemplo:
`hola = 1`
`hOlA = 2`
`Hol4 = 3`
`ho.la = 3`

Por lo que si la contraseña tiene menos de 3 puntos es débil, menos de 5 es media y más de 5 es fuerte.

## Ejercicio 5: Velocidad de descarga

Teniendo los siguientes ficheros:
```
file_1 = {"name": "alien", "size_GB": 38, "speed_Mbps": 38} 
file_2 = {"name": "predator", "size_GB": 38, "speed_Mbps": 2}
file_3 = {"name": "terminator", "size_GB": 5, "speed_Mbps": 25}
```

Queremos una función que cuando se le pase un fichero devuelva el tiempo de descarga de dicho fichero. Vamos a ver la matemática:

`1GB = 1000Mbps`

**NOTA: Se ha simplificado la matemática de bits, bytes etc...**

## Ejercicio 6: Rellena el disco duro

Este ejercicio requiere una función a la que se le pasan dos parámetros:

- Un array de números que representan los ficheros y su tamaño `[1,2,3]` serían 3 ficheros de 1, 2 y 3 megas respectivamente
- Un número que representa el tamaño total del disco.

La función debe devolver la cantidad de ficheros que caben en el disco duro.

Por lo que:
`save([4,4,4,3,3], 12) -> 3 (4 + 4 + 4 = 12)`
`save([4,4,4,3,3], 11) -> 2 (4 + 4 = 8)`

## Ejercicio 7: Eliminar duplicados

Este ejercicio requiere de una funcion a la que se le pase un array de números, esta función debe devolver otro array con los números que no están duplicados, por ejemplo:

`[1,2,3,2] -> [1,3]`
`[1,1,3,4,4,5] -> [3,5]`

Pueden utilizar el array que quieran, por ejemplo el siguiente:

`[1,2,3,2,4,6,2,6,7]`
