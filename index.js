const geradeZahlen = [];
const ungeradeZahlen = [];
/*const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];*/
const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];


const zahlen2 = zahlen.map((item) => {
  if (item % 2 == 0) {
    geradeZahlen.push(item);
    return geradeZahlen;
  }else {
    ungeradeZahlen.push(item);
    return ungeradeZahlen;
  }
 
  
});

/*function arraysSorting(item) {
  if (item % 2 == 0) {
    geradeZahlen.push(item);
  } else {
    ungeradeZahlen.push(item);
  }
}*/


console.log(geradeZahlen);
console.log(ungeradeZahlen);
console.log(zahlen2);


/*zahlen.map(arraysSorting);
console.log(ungeradeZahlen);
console.log(geradeZahlen);*/



/*const array = [1, 2, 3, 4, 5, 6, 7];

// inkrementieren aller Zahlen im Array
const array2 = array.map((item) => {
  return item + 1;
});
console.log(array2);*/


// Filter
const number = [9, 1, 4, 7, 2, 56, 3, 33, 89, 79, 473];
const gerade = number.filter((zahl) => zahl % 2 == 0);
const ungerade = number.filter((zahl) => zahl % 2 == 1);

console.log(gerade);
console.log(ungerade);