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

// Teil 3
const zahlenKette = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
zahlenKette.map(zuweisen);
console.log("ungerade Zahlen:" , ungeradeZahlen);
console.log("gerade Zahlen:" , geradeZahlen);