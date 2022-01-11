// 1 )
const ungeradeZahlen = [];
const geradeZahlen = [];
// 2 )
function arraysOrdnen(zahlenMap) {
    if (zahlenMap % 2 == 0) {
        geradeZahlen.push(zahlenMap);
    } else {
        ungeradeZahlen.push(zahlenMap);
    }
}
// 3 )
const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
zahlen.map(arraysOrdnen);
console.log(ungeradeZahlen);
console.log(geradeZahlen);