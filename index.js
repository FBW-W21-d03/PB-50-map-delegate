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

const ungeradeZahlen = [];
const geradeZahlen = [];

const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

const zahlen1 = zahlen.map((item) => {
  if (item % 2 == 0) {
    return item;
  }
  if (item % 2 == 1) {
    return item;
  }
});
