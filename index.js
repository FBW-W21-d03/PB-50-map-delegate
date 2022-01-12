const numbers= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbers.sort();

const geradeZahl=[];
const ungeradeZahl=[];
function geradeUngerade (param5){
    if (param5  %2 ==0) {
        geradeZahl.push(param5);
    } else {
        ungeradeZahl.push(param5);
        
    }
}


numbers.map(geradeUngerade)
console.log(numbers)
console.log(ungeradeZahl)
console.log(geradeZahl)
// Neue Aufgabe
const numbersnew= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
numbersnew.sort();

const arrayGerade = numbersnew.map((gerade) => {
if (gerade %2 ==0) {
    return gerade;
}
});
 const arrayUngerade = numbersnew.map((ungerade) => {
     if (ungerade %2 ==1) {
        return ungerade;
    }
   });
console.log(arrayGerade);
console.log(arrayUngerade);
