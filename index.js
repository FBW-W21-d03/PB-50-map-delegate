const ungeradeZahlen = [];
const geradeZahlen = [];
const zahlen =[9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

function myFunction(zahl) {
    if (zahl %2 === 0){
        ungeradeZahlen.push(zahl);
    } else {
        geradeZahlen.push(zahl);
    }
}

zahlen.map(myFunction);
console.log(geradeZahlen);
console.log(ungeradeZahlen)