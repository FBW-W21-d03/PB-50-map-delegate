"use strict";

const array = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const negativeArray = [];
const positiveArray = [];
array.map((paramForEach) => {
  if (paramForEach < 0) {
    negativeArray.push(paramForEach);
  } else {
    positiveArray.push(paramForEach);
  }
});
console.log("Alle Zahlen:", array);
console.log("Negative numbers:", negativeArray);
console.log("Possitive numbers:", positiveArray);
