const arrayZahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
console.log("Aufgabe 1: \n", arrayZahlen);
arrayZahlen.sort();

const gerade = [];
const ungerade = [];

console.log("Aufgabe 2: \n", arrayZahlen);

arrayZahlen.map((sort) =>  {

    if (sort % 2 == 0) {
        gerade.push(sort);
    } else {
        ungerade.push(sort);
    }
    
});


console.log("Aufgabe 3: \n");
console.log("gerade zahlen: ", gerade);
console.log("ungerade zahlen: ", ungerade);

