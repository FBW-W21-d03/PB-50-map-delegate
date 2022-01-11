const ungeradeZahlen = [];
const geradeZahlen = [];

const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];


function myfunc(zahl){
    if(zahl%2 == 0){
geradeZahlen.push(zahl);
    }else{
        ungeradeZahlen.push(zahl)
    }
}
zahlen.map(myfunc);
console.log(ungeradeZahlen);
console.log(geradeZahlen);