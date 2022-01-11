const geradeZahlen = [];
const ungeradeZahlen = [];
/*const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];*/


function arraysSorting(item) {
  if (item % 2 == 0) {
    geradeZahlen.push(item);
  } else {
    ungeradeZahlen.push(item);
  }
}

const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

zahlen.map(arraysSorting);
console.log(ungeradeZahlen);
console.log(geradeZahlen);