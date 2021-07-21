$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});

const modal = document.getElementById("myModal")
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
// const btnClose = document.getElementsByClassName("close")[0];
const btnClose = document.getElementById("close");
const SquarePerimeter = document.getElementById("squarePerimeter");
const SquareArea = document.getElementById("squareArea");

const questionH = document.getElementById("questionH");
const questionA = document.getElementById("questionA");
const inputTriangle = document.getElementById("inputTriangle");
const triangleButtons = document.getElementById("triangleButtons");
const boxTriangleArea = document.getElementById("box-triangleArea");
const triangle = document.getElementById("triangle");
const triangleone = document.getElementById("triangleone");
const TriangleArea = document.getElementById("triangleArea");
const TrianglePerimeter = document.getElementById("trianglePerimeter");
const TriangleHeight = document.getElementById("triangleHeight");

const boxCircle = document.getElementById("box-Circle");
const questionR = document.getElementById("questionR");
const questionC = document.getElementById("questionC");
const inputRadio = document.getElementById("inputRadio");
const circleButtons = document.getElementById("circleButtons");
const boxCircumference = document.getElementById("box-Circumference");
const CircleArea = document.getElementById("circleArea");
const CirclePerimeter = document.getElementById("circlePerimeter");
const CircleDiameter = document.getElementById("circleDiameter");
const SecondCircleArea = document.getElementById("SecondCircleArea");
const SecondCirclePerimeter = document.getElementById("SecondCirclePerimeter");
const circleRadio = document.getElementById("circleRadio");

const SquareInfo = () => {
  modal.style.display = "block";
  console.log("Click square info")
}

const TriangleInfo = () => {
  modal2.style.display = "block";
  console.log("triangle info");
}

const CircleInfo = () => {
  modal3.style.display = "block";
  console.log("circle info");
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

// ================================================Square=========================================
const squareButton = (id) => {
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); // se obtiene la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none' // damos un atributo display:none que oculta el div
  }
  modal.style.display = 'none';
  document.getElementById("side").value = "";
  SquareArea.innerHTML = "";
  SquarePerimeter.innerHTML = "";

  SqSide1.innerHTML = `a`;
  SqSide2.innerHTML = `b`;
  SqSide3.innerHTML = `c`;
  SqSide4.innerHTML = `d`;

  questionH.style.display = 'block';
}

// =================================================Triangle============================================
const triangleButton = (id) => {
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); // se obtiene la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none' // damos un atributo display:none que oculta el div
  }
  modal2.style.display = 'none';

  document.getElementById("side1").value = "";
  document.getElementById("side2").value = "";
  document.getElementById("side3").value = "";
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";

  TriangleArea.innerHTML = "";
  TrianglePerimeter.innerHTML = "";
  TriangleHeight.innerHTML = "";

  triangleone.style.display = 'none';
  boxTriangleArea.style.display = 'none';
  inputTriangle.style.display = 'block';
  triangleButtons.style.display = 'block';
  triangle.style.display = 'block';

  TrSide1.innerHTML = `a`;
  TrSide2.innerHTML = `b`;
  TrSide3.innerHTML = `c`;

}
const buttonTriangleArea = (id) => {
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); // se obtiene la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none' // damos un atributo display:none que oculta el div
  }

  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  TrianglePerimeter.innerHTML = "";
  TriangleHeight.innerHTML = "";
  inputTriangle.style.display = 'none';
  triangleButtons.style.display = 'none';
  triangle.style.display = 'none';
  triangleone.style.display = 'block';

  questionH.style.display = 'none';
}

//=============================================Circumference===========================================
const cricleButton = (id) => {
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); // se obtiene la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'none') ? 'block' : 'none' // damos un atributo display:none que oculta el div
  }
  modal3.style.display = "none";
  document.getElementById("radio").value = "";

  boxCircumference.style.display = 'none'
  boxCircle.style.display = 'block'
  inputRadio.style.display = 'block';
  questionR.style.display = 'block';

  CircleArea.innerHTML = "";
  CirclePerimeter.innerHTML = "";
  CircleDiameter.innerHTML = "";
  SecondCircleArea.innerHTML = "";
  SecondCirclePerimeter.innerHTML = "";
  circleRadio.innerHTML = "";
}

const buttonCircumference = (id) => {
  if (document.getElementById) {
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
  //code`
  document.getElementById("totalDiameter").value = "";
  inputRadio.style.display = 'none';
  questionR.style.display = 'none';

  boxCircle.style.display = 'none'

  CircleArea.innerHTML = "";
  CirclePerimeter.innerHTML = "";
  CircleDiameter.innerHTML = "";

  SecondCircleArea.innerHTML = "";
  SecondCirclePerimeter.innerHtml = "";
  circleRadio.innerHtml = "";
}

//=============================================ToReturn===========================================
const toReturn = (id) => {
  if (document.getElementById) { //se obtiene el id
    var el = document.getElementById(id); // se obtiene la variable "el" igual a nuestro div
    el.style.display = (el.style.display == 'block') ? 'block' : 'block' // damos un atributo display:none que oculta el div
  }
  document.getElementById("side1").value = "";
  document.getElementById("side2").value = "";
  document.getElementById("side3").value = "";

  TrSide1.innerHTML = `a`;
  TrSide2.innerHTML = `b`;
  TrSide3.innerHTML = `c`;

  TriangleArea.innerHTML = "";
  boxTriangleArea.style.display = 'none'
  inputTriangle.style.display = 'block';
  triangleButtons.style.display = 'block';
  triangle.style.display = 'block';
  triangleone.style.display = 'none';

  questionH.style.display = 'block';

// circle
  boxCircumference.style.display = 'none'
  boxCircle.style.display = 'block'
  inputRadio.style.display = 'block';
  questionR.style.display = 'block';
}

//Here call the functions events listener onclick
window.onload = function () {
  /* hace que se cargue la function lo que predetermina que div estara oculto por un largo tiempo hasta la llamar la funcion nuevamente */
  squareButton('square-content'); /* "contenido a mostrar" es el nombre que le dimos al div*/
  triangleButton('triangle-content');
  cricleButton('circle-content');
  buttonTriangleArea('box-triangleArea');
  toReturn('triangleCard')
  buttonCircumference('box-Circumference')
}


//==========================================Calculate Figure Square==========================================
const perimeterOfTheSquare = (side) => side * 4;
const squareArea = (side) => parseFloat(side) * parseFloat(side);

//First Calculate Perimeter
const calculatePerimeterSquare = () => {
  const input = document.getElementById("side").value;
  const element = document.getElementById("squarePerimeter");

  const SqSide1 = document.getElementById("SqSide1");
  const SqSide2 = document.getElementById("SqSide2");
  const SqSide3 = document.getElementById("SqSide3");
  const SqSide4 = document.getElementById("SqSide4");

  const perimeter = perimeterOfTheSquare(input);
  element.innerHTML = `Perimeter: ${perimeter}`;
  SqSide1.innerHTML = input;
  SqSide2.innerHTML = input;
  SqSide3.innerHTML = input;
  SqSide4.innerHTML = input;
}

//Calculate Area 
const calculateAreaSquare = () => {
  const input = document.getElementById("side").value;
  const element = document.getElementById("squareArea");

  const area = squareArea(input);
  element.innerHTML = `Area: ${area}`;
  SqSide1.innerHTML = input;
  SqSide2.innerHTML = input;
  SqSide3.innerHTML = input;
  SqSide4.innerHTML = input;
}

//==========================================Calculate Figure Isosceles Triangle==========================================
//Isosceles triangle
const perimeterOfTheTriangle = (side1, side2, side3) => parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
const triangleArea = (base, height) => (parseFloat(base) * parseFloat(height)) / 2;
const isoscelesHeight = (side1, side2, side3) => Math.sqrt(side1 * side2 - (side3 ** 2) / 4);

//Calculate Area 
const calculateAreaTriangle = () => {
  const base = document.getElementById("base").value;
  const height = document.getElementById("height").value;
  const element = document.getElementById("triangleArea");

  const areaTriangle = triangleArea(base, height);
  element.innerHTML = `Area: ${areaTriangle}`;

}

//Calculate Perimeter
const calculatePerimeterTriangle = () => {
  const input1 = document.getElementById("side1").value;
  const input2 = document.getElementById("side2").value;
  const input3 = document.getElementById("side3").value;
  const element = document.getElementById("trianglePerimeter");

  const TrSide1 = document.getElementById("TrSide1");
  const TrSide2 = document.getElementById("TrSide2");
  const TrSide3 = document.getElementById("TrSide3");

  const perimeter = perimeterOfTheTriangle(input1, input2, input3);
  element.innerHTML = `Perimeter: ${perimeter}`;

  TrSide1.innerHTML = input1;
  TrSide2.innerHTML = input2;
  TrSide3.innerHTML = input3;
}

//Calculate height
const calculateHeightTriangle = () => {
  const input1 = document.getElementById("side1").value;
  const input2 = document.getElementById("side2").value;
  const input3 = document.getElementById("side3").value;
  const element = document.getElementById("triangleHeight");

  const height = isoscelesHeight(input1, input2, input3);
  element.innerHTML = `Height: ${height.toFixed(2)}`;

  TrSide1.innerHTML = input1;
  TrSide2.innerHTML = input2;
  TrSide3.innerHTML = input3;
}

///==========================================Calculate Circumference==========================================
//Diameter
const circleDiameter = (radio) => radio * 2;
//Pi
const PI = Math.PI;
//Circumference
//Llamara funciones dentro de funciones ... function declarativa
const circlePerimeter = (radio) => {
  const Cidiameter = circleDiameter(radio)
  return Cidiameter * PI;
}
//Area
const circleArea = (radio) => (radio * radio) * PI;
//Radio
const radio = () => {
  const totalDiameter = document.getElementById("totalDiameter").value;
  return totalDiameter/2;
}

//Calculate Diameter
const calculateDiameterCircle = () => {
  const radio = document.getElementById("radio").value;
  const element = document.getElementById("circleDiameter");
  const circleR = document.getElementById("circleR");

  const diameter = circleDiameter(radio);
  element.innerHTML = `Diameter: ${diameter}`;

  circleR.innerHTML = radio;
}

//Calculate Perimeter`
const calculatePerimeterCircle = () => {
  const radio = document.getElementById("radio").value;
  const element = document.getElementById("circlePerimeter");
  const circleR = document.getElementById("circleR");

  const perimeter = circlePerimeter(radio);
  element.innerHTML = `Perimeter: ${perimeter.toFixed(2)}`;

  circleR.innerHTML = radio;
}

//Next box Calculate second Perimeter value
const calculateSecondPerimeterCircle = () => {
  const element = document.getElementById("SecondCirclePerimeter");

  const secondPerimeter = 2 * Math.PI * radio();
  element.innerHTML = `Perimeter: ${secondPerimeter.toFixed(2)}`;
}

//Calculate Area
const calculateAreaCircle = () => {
  const radio = document.getElementById("radio").value;
  const element = document.getElementById("circleArea");
  const circleR = document.getElementById("circleR");

  const area = circleArea(radio);
  element.innerHTML = `Area: ${area.toFixed(2)}`;

  circleR.innerHTML = radio;
}

//Next box Calculate second Area value
const calculateSecondAreaCircle = () => {
  const element = document.getElementById("SecondCircleArea");

  const secondArea = Math.PI * Math.pow(radio(), 2);
  element.innerHTML = `Area: ${secondArea.toFixed(2)}`;
}

//Calculate Radio 
const calculateRadioCircle = () => {
  const element = document.getElementById("circleRadio");

  const radiusCircumference = radio(totalDiameter);
  element.innerHTML = `radio: ${radiusCircumference.toFixed(2)}`;
}


const resetAll = () => {
  document.getElementById("side").value = "";
  document.getElementById("side1").value = "";
  document.getElementById("side2").value = "";
  document.getElementById("side3").value = "";
  document.getElementById("base").value = "";
  document.getElementById("height").value = "";
  document.getElementById("radio").value = "";
  document.getElementById("totalDiameter").value = "";


  SquareArea.innerHTML = "";
  SquarePerimeter.innerHTML = "";

  TriangleArea.innerHTML = "";
  TrianglePerimeter.innerHTML = "";
  TriangleHeight.innerHTML = "";

  CircleArea.innerHTML = "";
  CirclePerimeter.innerHTML = "";
  CircleDiameter.innerHTML = "";

  SqSide1.innerHTML = `a`;
  SqSide2.innerHTML = `b`;
  SqSide3.innerHTML = `c`;
  SqSide4.innerHTML = `d`;

  TrSide1.innerHTML = `a`;
  TrSide2.innerHTML = `b`;
  TrSide3.innerHTML = `c`;

  SecondCircleArea.innerHTML = "";
  SecondCirclePerimeter.innerHTML = "";
  circleRadio.innerHTML = "";

  circleR.innerHTML = `<strong><i>r</i></strong>`;
}

const close =() => {
  modal.style.display = 'none';
  console.log("close")
}
const close1 =() => {
  modal2.style.display = "none";
  console.log("close modal 2")
}
const close2 =() => {
  modal3.style.display = "none";
  console.log("close modal 3")
}

//Events listener
btnClose.addEventListener('click', close);