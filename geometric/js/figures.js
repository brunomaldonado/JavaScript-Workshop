console.group("Squares")
// const sideOfTheSquare = 5;
// console.log("The sides of the square measure: " + sideOfTheSquare + "cm")

// const perimeterOfTheSquare = sideOfTheSquare * 4;
// console.log("The perimeter of square is = " + perimeterOfTheSquare + "cm");
//  function perimeterOfTheSquare(side){
//   return side * 4
//  }

// const squareArea = sideOfTheSquare * sideOfTheSquare;
// console.log("The area of the squeare is =" +  squareArea + "cm^2")
// function squareArea(side){
//   return side * side
// }

console.log("\n")
console.groupEnd()

console.group("Triangles");
// const sideTriangle1 = 12;
// const sideTriangle2 = 12;
// const triangleBase = 5;
// const triangleHeight = 6.5
// console.log(`Side #1 measure ${sideTriangle1}cm, 
// Side #2 measure ${sideTriangle2}cm,
// Base of the triangle measure ${triangleBase}cm and the
// triangle height measure ${triangleHeight}cm`);

// const perimeterOfTheTriangle = sideTriangle1 + sideTriangle2 + triangleBase;
// console.log("The perimeter of the Triangle is = " + perimeterOfTheTriangle + "cm")

// const triangleArea = (triangleBase * triangleHeight)/ 2;
// console.log("The area of triangle is = " + triangleArea + "cm");
console.log("\n")
console.groupEnd();

console.group("Circle or circumference, is the same");
//Radio
// const circleRadius = 7;
//Diameter
// const circleDiameter = circleRadius * 2;
//Pi
// const PI = Math.PI;
//Circumference
// const circlePerimeter = circleDiameter * PI;
//Area
// const circleArea = (circleRadius * circleRadius) * PI;

// console.log(`The radius of the circumference measures ${circleRadius}cm,
// The diameter of the circumference is = ${circleDiameter}cm,
// The value of PI, is = ${PI}
// The perimeter of the circumference is = ${circlePerimeter.toFixed(2)}cm and 
// The Area is = ${circleArea.toFixed(2)}cm
// `)
// console.log("\n")
// console.groupEnd()
console.log("\n")


//Encapsulando codigo en funciones
console.log("Enscapsulando codigo en funciones")

console.group("Squares")
 const perimeterOfTheSquare = (side) => side * 4
const squareArea = (side) => side * side
console.groupEnd()

console.group("Triangles");
const perimeterOfTheTriangle = (side1, side2, base) => side1 + side2 + base;
const triangleArea = (base, height) => (base * height)/2
console.groupEnd();

console.group("Circle or circumference, is the same");
//Diameter
const circleDiameter = (radio) => radio * 2
//Pi
const PI = Math.PI;
//Circumference
//Llamara funciones dentro de funciones ... function declarativa
const circlePerimeter = (radio) => {
  const diameter = circleDiameter(radio)
  return diameter * PI
}
//Area
const circleArea = (radio) => (radio * radio) * PI
console.log("\n")
console.groupEnd()