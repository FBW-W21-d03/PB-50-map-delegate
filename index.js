 const zahlen = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];

 const geradeZahlen = [];
 const ungeradeZahlen = [];

 function ordnen(zahl) {
 
     if (zahl % 2 == 0) {
         ungeradeZahlen.push(zahl);
         } else {
           geradeZahlen.push(zahl);
      }
  
  }

 zahlen.map(ordnen);
 console.log("zahlen:", `${zahlen}`);
 console.log("geradeZahlen:", `${geradeZahlen}`);
 console.log("ungeradeZahlen:",`${ungeradeZahlen}`);




 

// ANDERE LÖSUNG MIT VEWENDUNG VON FILTER:
const numbers = [9, 1, 4, 7, 2, 56, 3, 33, 89, 76, 473];
const evenNumbers = numbers.filter((number) => number % 2 == 0);
const oddNumbers = numbers.filter((number) => number % 2 == 1);

 console.log("evenNumbers:", `${evenNumbers}`);
 console.log("oddNumbers:", `${oddNumbers}`);