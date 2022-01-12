// Teil 1
const ungeradeZahlen = [];
const geradeZahlen = [];

// Teil 2
function zuweisen(zahlen) {
    if (zahlen % 2 == 0) {
        geradeZahlen.push(zahlen);
    } else {
        ungeradeZahlen.push(zahlen);
    }
}

/*
Teil 3 - map mit return
*/
const zahlenKette = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
zahlenKette.map(zuweisen);
// inkrementieren aller Zahlen im Array
const array2 = zahlenKette.map(
    (zuweisen) => {
        return zuweisen + 1;
    }
);


console.log("ungerade Zahlen:" , ungeradeZahlen);
console.log("gerade Zahlen:" , geradeZahlen);