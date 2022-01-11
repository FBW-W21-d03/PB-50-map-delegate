const numbers= [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
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