const number = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const geradenZahlen = [];
const ungeradeZahlen = [];

const meinZahlen = number.map((numerZahl) => {
  if (numerZahl % 2 == 0) {
    geradenZahlen.push(numerZahl);
    return geradenZahlen;
  } else {
    ungeradeZahlen.push(numerZahl);
    return ungeradeZahlen;
  }
  return meinZahlen;
});

console.log(number);
console.log(geradenZahlen);
console.log(ungeradeZahlen);

const myNumber = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const geradenZahlen = [];
const ungeradeZahlen = [];
myNumber.map((parametZahl) => {
  if (parametZahl % 2) {
    ungeradeZahlen.push(parametZahl);
  } else {
    geradenZahlen.push(parametZahl);
  }
});

console.log("mein Zahl ist:", myNumber);
console.log("gerade Zahlen:", geradenZahlen);
console.log("ungerade Zahlen:", ungeradeZahlen);
