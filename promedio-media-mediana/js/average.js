// const list = [100, 200, 300,500];

// let addList = 0;

// for (let i = 0; i < list.length; i++) {
//   addList = addList + list[i]
// }
// console.log("The add is: ", addList)

// const listAverage = addList / list.length;
// console.log("The average is: ", listAverage)

//here is when the user input the list 
const calculateArithmeticMean = (list) =>{
  // let addList = 0;
  // for (let i = 0; i < list.length; i++) {
  //   addList = addList + list[i];
  // }

  const arithmeticMean = list.reduce((accumulateValue, currentValue) => {
    return accumulateValue + currentValue;
  })
  
  const listAverage = arithmeticMean / list.length;
  console.log("the Arithmetic Mean is: " + listAverage);
  return listAverage;
}



const arr = [1, 2, 3, 4, 5];

const addList1 = arr.reduce((accumulateValue, currentValue) =>{
  setTimeout(() => console.log(`${accumulateValue}, ${currentValue}`), 3000);
  return accumulateValue + currentValue;
})
setTimeout(() => console.log(addList1), 3000);

const addList2 = (accumulateValue, currentValue) => {
  console.log(`${accumulateValue}, ${currentValue}`)
  return accumulateValue + currentValue;
}

console.log(arr.reduce(addList2))


