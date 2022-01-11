const numbers = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

const negNumbers = [];
const posNumbers = [];

function organize(number) {
 
  if (number % 2 == 0) {
    posNumbers.push(number);
  } else {
    negNumbers.push(number);
  }
  
}

numbers.map(organize);
console.log("numbers:", `${numbers}`);
console.log("positiveNumbers:", `${posNumbers}`);
console.log("negativeNumbers:",` ${negNumbers}`);

