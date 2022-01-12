"use strict";
/*
const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const ungeradeZahlen = [];
const geradeZahlen = [];
function arraysOrdnen(zahlenMap) {
  if (zahlenMap % 2 == 0) {
    geradeZahlen.push(zahlenMap);
  } else {
    ungeradeZahlen.push(zahlenMap);
  }
}

zahlen.map(arraysOrdnen);
console.log(ungeradeZahlen);
console.log(geradeZahlen);
*/

const geradeZahlen = [];
const ungeradeZahlen = [];
const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const zahlen2 = zahlen.map((item) => {
  if (item % 2 == 0) {
    geradeZahlen.push(item);
    return geradeZahlen;
  } else {
    ungeradeZahlen.push(item);
    return ungeradeZahlen;
  }
});

console.log(geradeZahlen);
console.log(ungeradeZahlen);
console.log(zahlen2);

const number = [9, 1, 4, 7, 2, 56, 3, 33, 89, 79, 473];
const gerade = number.filter((zahl) => zahl % 2 == 0);
const ungerade = number.filter((zahl) => zahl % 2 == 1);

console.log(gerade);
console.log(ungerade);
