const USSalary = US.map((person) => person.salary);
const salaryUSSorted = USSalary.sort((salaryA, salaryB) => salaryA - salaryB);

//if is even number -------------Helpers
const evenNumber = (number) => {return (number % 2 === 0)};
//calculate median number between personHalfSalary 1 and 2
const calculateArithmeticMedian = (list) =>{
  // const halfList = parseInt(list.length / 2);
  const arithmeticMedian = list.reduce((accumulateValue, currentValue) => {
    console.log(`[[${salaryUSSorted.indexOf(accumulateValue)}]${accumulateValue}, [${salaryUSSorted.indexOf(currentValue)}]${currentValue}]`)
    return accumulateValue + currentValue;
  })
  
  const listAverage = arithmeticMedian / list.length;
  return listAverage;
} 

//calculate salary 
const medianSalary = (list) => {
  // Half of the array list 
  const halfList = parseInt(list.length / 2);

  if (evenNumber(list.length)) {
    const personHalfSalary_1 = list[halfList - 1];
    const personHalfSalary_2= list[halfList];

    median = calculateArithmeticMedian([personHalfSalary_1, personHalfSalary_2]);
    return median;
  } else {
    //Person with half the salary
    const personHalfSalary = list[halfList];
    console.log(`[${salaryUSSorted.indexOf(personHalfSalary)}]${personHalfSalary}`)
    return personHalfSalary;
  }
}
console.log(medianSalary(salaryUSSorted));

const medianGeneralUS = medianSalary(salaryUSSorted);
// Median salary top 10%
const sliceStart = (salaryUSSorted.length * 90) / 100;
const sliceCount = salaryUSSorted.length - sliceStart;

const salaryUSTop10 = salaryUSSorted.splice(sliceStart, sliceCount);
console.log(`${sliceStart}, ${sliceCount}`);

const medianTop10US = medianSalary(salaryUSTop10);

console.log({
  medianGeneralUS,
  medianTop10US
})