const numbers = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const gerade = numbers.filter((zahl) => zahl % 2 == 0);
const ungerade = numbers.filter((zahl) => zahl % 2 == 1);

console.log(gerade);
console.log(ungerade);