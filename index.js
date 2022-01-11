const zahlen=[9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473]
const ungeradeZahlen=[]
const geradeZahlen=[]
function isGrade(zahl){
    if (zahl%2===0){
        geradeZahlen.push(zahl)
    }
    else{
        ungeradeZahlen.push(zahl)
    }
    console.log(zahl)
}
zahlen.map(isGrade)
console.log(ungeradeZahlen)
console.log(geradeZahlen)



