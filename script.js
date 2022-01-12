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
const numbersnew= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbersnew.sort();

const arrayGerade = numbersnew.map((gerade) => {
if (gerade %2 ==0) {
    return gerade;
}
});
console.log(arrayGerade);
const numbersnew2= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbersnew.sort();


 const arrayUngerade = numbersnew2.map((ungerade) => {
     if (ungerade %2 ==1) {
        return ungerade;
    }
   });

console.log(arrayUngerade);

const numbersnew= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbersnew.sort();

const arrayGerade = numbersnew.map((gerade) => {
if (gerade %2 ==0) {
    return gerade;
}
});
console.log(arrayGerade);
const numbersnew2= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbersnew.sort();


 const arrayUngerade = numbersnew2.map((ungerade) => {
     if (ungerade %2 ==1) {
        return ungerade;
    }
   });

console.log(arrayUngerade);