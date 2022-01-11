// Wir sollen ein Array mit geraden und ungeraden Zahlen in jeweils separate Arrays ordnen.

// Dazu werden wir eine Funktion schreiben und das Array mittels map() durchlaufen.

// ## Aufgabenstellung - Teil 1
// Schreibe ein leeres Array ungeradeZahlen.
const ungeradeZahlen =[];

// Schreibe nun ein leeres Array geradeZahlen.
const geradeZahlen = [];
let zahl = [];

// ## Aufgabenstellung - Teil 2
// Schreibe eine Funktion, die eine Zahl als Parameter akzeptiert.
function zahldb(dbzahl) {
    if (dbzahl %2 == 0){
    geradeZahlen.push(dbzahl);
}else{
    ungeradeZahlen.push(dbzahl);
}
}

// Falls der Parameter eine gerade Zahl ist, wird die Zahl dem Array geradeZahlen zugeordnet, sonst dem Array ungeradeZahlen.

// ## Aufgabenstellung - Teil 3
// Schreibe nun ein Array mit folgenden Zahlen: 9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473.
zahl = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
zahl.sort();
// Benutze map() und die Funktion als Argument, um die Zahlen in den beiden Arrays zu ordnen.
zahl.map(zahldb);
console.log(ungeradeZahlen);
console.log(geradeZahlen);


