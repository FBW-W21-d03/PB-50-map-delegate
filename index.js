const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

const geradeZahlen = [];
const ungeradeZahlen = [];

function ordnen(zahl) {
 
  if (zahl % 2 == 0) {
    ungeradeZahlen.push(zahl);
  } else {
    geradeZahlen.push(zahl);
  }
  
}

zahlen.map(ordnen);
console.log("zahlen:", `${zahlen}`);
console.log("geradeZahlen:", `${geradeZahlen}`);
console.log("ungeradeZahlen:",` ${ungeradeZahlen}`);

