const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const ungeradeZahlen = [];
const geradeZahlen = [];

function geradeOderUngerade(zahl) {
  if (zahl % 2 == 0) {
    geradeZahlen.push(zahl);
  } else {
    ungeradeZahlen.push(zahl);
  }
}

zahlen.map(geradeOderUngerade);

console.log("Alle Zahlen:", zahlen);
console.log("davon gerade Zahlen:", geradeZahlen);
console.log("davon ungerade Zahlen:", ungeradeZahlen);
