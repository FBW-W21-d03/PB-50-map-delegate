const numbers = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbers.sort ()
const geradeZahlen = [];
const ungeradeZahlen= [];

numbers.map.(parameterZahl(parameterZahl) => {
    if (parameterZahl % 2) {
      ungeradeZahlen.push(parameterZahl);
    } else {
      geradenZahlen.push(parameterZahl);
    }
  });

console.log("alleNumbers:",numbers);
console.log("geradeZahlen:", geradeZahlen);
console.log("ungeradeZahlen:", ungeradeZahlen);