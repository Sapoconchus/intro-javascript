
const fibonacci = (num) => {

let index = 2;
let acc = 1;
let sum = 0;
let temp = 1;

if(num === 0) {
	sum = 0 } 
	else if( num === 1 || num===2) 
	{
	sum = 1;
} else {

while (index < num) {
	/*console.log(`empiezo bucle ${index}`)*/
	sum = acc + temp;
	temp = acc;
	acc = sum;
	index ++;
	/*console.log( `bucle fin: temp= ${temp}, sum= ${sum}, acc= ${acc}, index= ${index}.`)*/
};
}
console.log(sum);
} 


fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);
fibonacci(8);
fibonacci(9);
fibonacci(10);
fibonacci(11);
fibonacci(12);