$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});
// const btnCalculateAverage = document.getElementById("calculateAverage");
// const btnCalculateMedian = document.getElementById("calculateMedian");
const inputNumber = document.getElementById("inputNumbers");
const elemShowNumber = document.getElementById("showNumbers");
const elemShowAverage = document.getElementById("showElementAverage")
const elemShowElement1_2 = document.getElementById("showElement1_2")
const elemShowModa = document.getElementById("showElementModa")
const elemAverage = document.getElementById("average");
const elemMedian = document.getElementById("median");
const elemModa = document.getElementById("moda");
const btnResetAll = document.getElementById("resetAll");
const array = [];


const calculateArithmeticMean = (newArray) => {
  // let list =0;

  // for (let i = 0; i < array.length; i++) {
  //   list = list + array[i]
  // }
  // console.log("The add list is: ", list);

  // const average = list / array.length;
  // console.log("The average is: ", average)
  // elemAverage.innerHTML = `El promedio es: ${parseInt(average)}`;

  const arithmeticMean = newArray.reduce((accumulateValue, currentValue) => {
    // console.log(`Element_1 ${accumulateValue}, Element_2 ${currentValue}`)
    elemShowElement1_2.innerHTML = `[${accumulateValue}, ${currentValue}]`
    return accumulateValue + currentValue;
  })

  const average = arithmeticMean / newArray.length;
  // console.log("the Arithmetic Mean is: " + average);
  // elemAverage.innerHTML = `El promedio es: ${parseInt(average)}`;
  return average
}

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const calculateMedianInsideArray = () => {

  // halfList = parseInt(array.length / 2);
  // // console.log(`the median is, indexOf[${halfList}]`);

  // let median;

  // if (evenNumber(array.length)) {
  //   const element1 = array[halfList - 1];
  //   const element2 = array[halfList];

  //   const meanElement1_2 = calculateArithmeticMean([element1, element2]);
  //   median = meanElement1_2;
  //   console.log("THE EVEN NUMBER OF THE arrayAY LIST IS ", median);
  //   elemMedian.innerHTML = `La mediana es: ${parseInt(median)}`;
  // } else {
  //   median = array[halfList]; //half, inside array list
  //   console.log("The array list number half is: ", median);
  //   elemMedian.innerHTML = `La mediana es: ${median}`
  // }
}

const clear = () => {
  array.length = 0;
  elemShowNumber.innerHTML = `[ ]`;
  elemAverage.innerHTML = ``;
  elemMedian.innerHTML = ``;
  elemModa.innerHTML = ``;
  elemShowAverage.innerHTML = ``;
  elemShowElement1_2.innerHTML = ``;
  elemShowModa.innerHTML = ``;

  document.getElementById("inputNumbers").value = "";

}

//Events Listener
// btnCalculateAverage.addEventListener('click', calculateArithmeticMean);
// btnCalculateMedian.addEventListener('click', calculateMedianInsideArray)
btnResetAll.addEventListener('click', clear);

inputNumber.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    
    array.push(parseFloat(e.target.value))
    
    newArray = array.filter(Boolean)
    newArray.sort((a, b) => {
      return a - b
    });
    
    console.log("The list quantity are: ", newArray.length)
    console.log("input list: ", newArray);
    elemShowNumber.innerHTML = `[${newArray}] `;

    const arithmeticMean = newArray.reduce((accumulateValue, currentValue) => {
      console.log(`${accumulateValue}, ${currentValue}`);
      return accumulateValue + currentValue;
    })
    // console.log("the ADD array list is: ", arithmeticMean);
    elemShowAverage.innerHTML = `[${arithmeticMean}/${newArray.length}]`;

    // const average = arithmeticMean / array.length;
    // console.log("the Arithmetic Mean is: " + average);
    // elemAverage.innerHTML = `El promedio es: ${parseInt(average)}`;
    // return average;


    //=========================Median============
    halfList = parseInt(newArray.length / 2);
    // console.log(`the median is, indexOf[${halfList}]`);

    let median;

    if (evenNumber(newArray.length)) {
      const element1 = newArray[halfList - 1];
      const element2 = newArray[halfList];

      const meanElement1_2 = calculateArithmeticMean([element1, element2]);
      median = meanElement1_2;
      console.log("THE EVEN NUMBER OF THE ARRAY LIST IS ", median);
      elemMedian.innerHTML = `${parseInt(median)}`;
    } else {
      median = newArray[halfList]; //half, inside array list
      console.log("The array list number half is: ", median);
      elemMedian.innerHTML = `${parseInt(median)}`;
      elemShowElement1_2.innerHTML = `[${median}]`
    }

    //=====================end median================

    // ===================Moda====================
    const countRepeatingNumbersList = {};

    newArray.map(
      function (arrayElement) {
        if (countRepeatingNumbersList[arrayElement]) {
          countRepeatingNumbersList[arrayElement] += 1; // add the positions of the repeating numbers
        } else { // if the arrayElement does not exist yet
          countRepeatingNumbersList[arrayElement] = 1; // The number only appeared once
        }
      }
    );

    //`An array within a list of arrays.
    const arrayWithinList = Object.entries(countRepeatingNumbersList).sort(
      function (accumulateValue, currentValue) {
        accumulateValue - currentValue;
      }
    )
    //array list ordered from smallest to largest
    const arrayListLowestToHighest = Object.entries(countRepeatingNumbersList).sort(
      function (elementA, elementB) {
        return elementA[1] - elementB[1]
      }
    )

    //The mode is the last position of the array 
    const moda = arrayListLowestToHighest[arrayListLowestToHighest.length - 1];
    // console.log("The moda is: ", moda);
    elemShowModa.innerHTML = `[${moda}]`;

    const modaValue = moda.shift()
    // console.log("THE MODA VALUE IS", modaValue);
    elemModa.innerHTML = `${modaValue}`;

    // ===================End Moda=====================


    const average = arithmeticMean / newArray.length;
    // console.log("the Arithmetic Mean is: " + average);
    elemAverage.innerHTML = `${parseInt(average)}`;
    return average;

    // document.getElementById("inputNumbers").value = "";

  } else {
  // document.getElementById("inputNumbers").value = '';

  }

})