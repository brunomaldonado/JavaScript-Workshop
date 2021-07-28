// const list = [1,2,3,1,2,3,4,2,2,2,2,5,5,5,5,5,5,2,1];

// //Count the Repeating Numbers in the List
// const countRepeatingNumbersList = {};

// list.map(
//   function(arrayElement){
//     if (countRepeatingNumbersList[arrayElement]) {
//       countRepeatingNumbersList[arrayElement] += 1; // add the positions of the repeating numbers
//     } else { // if the arrayElement does not exist yet
//       countRepeatingNumbersList[arrayElement] = 1; // The number only appeared once
//     }
//   }
// );

// //`An array within a list of arrays.
// const arrayWithinList = Object.entries(countRepeatingNumbersList).sort(
//   function (accumulateValue, currentValue) {
//     accumulateValue - currentValue;
//   }
// )
// //array list ordered from smallest to largest
// const arrayListLowestToHighest = Object.entries(countRepeatingNumbersList).sort(
//   function(elementA, elementB){
//       return elementA[1] - elementB[1]
//   }
// )

// //The mode is the last position of the array 
// const moda = arrayListLowestToHighest[arrayListLowestToHighest.length - 1];
// console.log("The moda is: ", moda);

// const modaValue = moda.shift()
// console.log("THE MODA VALUE IS", modaValue);

const calculateModa = (list) => {
  const objectCount = {};

  const count = list.map( element => {
    if (objectCount[element]) {
      objectCount[element] += 1;
    } else {
      objectCount[element] = 1;
    }
  });
  const arrayOrdered = Object.entries(objectCount).sort((firstElement, secondElement)=>{
    return firstElement[1] - secondElement[1];
  })
  return arrayOrdered.filter( element => element[1] === arrayOrdered[0][1]).map(value => value[0]);
}

console.log(calculateModa([1,2,3,3,3,7,8,9,9,9,6]));