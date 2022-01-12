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


/*
map mit return
*/
const zahlen =[9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

const array2 = zahlen.map(
    (item) => {
        if(item % 2 == 0){
            return item
        }if (item % 2 == 1) {
         return item;
        }
    }
);


/*
map mit Filter
*/ 

const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

const geradeZahlen = zahlen.filter((zahl) => zahl % 2 == 0);
const ungeradeZahlen = zahlen.filter((zahl) => zahl % 2 == 1);

console.log(geradeZahlen);
console.log(ungeradeZahlen);