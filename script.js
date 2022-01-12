const ungeradeZahlen = [];
const geradeZahlen = [];

const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

const zahlen2 = zahlen.map(
    (item)=>{
        if(item%2 ==0){
            return item
        }if (item%2 ==1) {
         return item;
        }
    }
);
/*
function myfunc(zahl){
    if(zahl%2 == 0){
geradeZahlen.map(zahl);
    }else{
        ungeradeZahlen.map(zahl)
    }
}
zahlen.map(myfunc);*/
console.log(ungeradeZahlen);
console.log(zahlen2);

