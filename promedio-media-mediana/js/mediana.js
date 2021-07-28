const calculateArithmeticMean = (list) =>{
  const arithmeticMean = list.reduce((accumulateValue, currentValue) => {
    return accumulateValue + currentValue;
  })
  
  const listAverage = arithmeticMean / list.length;
  // console.log("the Arithmetic Mean is: " + listAverage);
  return listAverage;
} 
 
 const list = [
   100,
   200,
   500,
   440,
   440,
   234,
   100,
   800000000,
 ];

 const halfList = parseInt(list.length / 2);

 // true if "even" and if it's "odd" false
 //We create a funtion if it is even
 // const evenNumber = (number) => {
 //   if (number is even?){
 //     return true;
 //   } else {
 //     return false;
 //   }
 // }

 const evenNumber = (number) => {
  if (number % 2 === 0) { // '%' is modulo  - if the remainderis zero, the number is even
    return true;
  } else {
    return false;
  }
 }

  //  if (list is even?){
 //    we needed two elements
 //    -> The average
 //    -> median /o mediana 
 //  } else {
 //   the position halfList inside array list  o the position 2 inside array list 
 //   ->is the median
 //  }
let median;
if (evenNumber(list.length)) {
  const element1 = list[halfList - 1];
  const element2 = list[halfList];

  const meanElement1_2 = calculateArithmeticMean([element1, element2]);
  median = meanElement1_2;
} else { // is the number is odd
  median = list[halfList]
}
