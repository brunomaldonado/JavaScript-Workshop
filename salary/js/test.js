const showTotalData = document.getElementById("total")
const showData = document.getElementById("showData")
const btnNetTotal = document.getElementById("netTotal");
const showSaveMoney = document.getElementById("showSaveMoney");

const calculateNetTotal = () => {
    const inputsSalary = document.getElementById("salary");
    const salary = parseFloat(inputsSalary.value);
    const inputNetflix = document.getElementById("netflix");
    const priceNetflix = parseInt(inputNetflix.value);
    const inputAmazon = document.getElementById("prime");
    const pricePrime = parseFloat(inputAmazon.value);
    const inputEthernet = document.getElementById("ethernet");
    const priceEthernet = parseFloat(inputEthernet.value);
    const inputRent = document.getElementById("rent");
    const priceRent = parseFloat(inputRent.value);
    const inputTransport = document.getElementById("transport");
    const priceTransport = parseFloat(inputTransport.value);
    const inputFood = document.getElementById("food")
    const priceFood = parseFloat(inputFood.value);
    const inputDebt = document.getElementById("debt");
    const priceDebt = parseFloat(inputDebt.value);
    const inputTrip = document.getElementById("trip");
    const priceTrip = parseFloat(inputTrip.value);
    const inputMovies = document.getElementById("movies");
    const priceMovies = parseFloat(inputMovies.value);
    const inputVestment = document.getElementById("vestment");
    const priceVestment = parseFloat(inputVestment.value);
    const inputInfonavit = document.getElementById("infonavit");
    const priceInfonavit = parseFloat(inputInfonavit.value);
    const inputPhone = document.getElementById("phone");
    const pricePhone = parseFloat(inputPhone.value);

    let arr = [];

    arr.push(priceNetflix, pricePrime, priceEthernet, priceRent, priceTransport, priceFood, priceDebt, priceTrip, priceMovies, priceVestment, priceInfonavit, pricePhone);
    arr.sort((a, b) => {
        return a - b
    })
    console.log(arr);

    myArrClean = arr.filter(Boolean);
    console.log(myArrClean);

    return myArrClean.reduce((accValue, currentValue) => {
        const result = accValue + currentValue;
        const netSalary = salary;
        const netTotal = netSalary - result;
        console.log(netTotal);
        showTotalData.innerHTML = `Total incluyendo los gastos son: $${netTotal.toFixed(2)}`;

        return result;
    });
};

const btnSave = document.getElementById("save");
const btnWithdrawals = document.getElementById("withdrawals")

let form = document.forms.saveMoney;

// form.amountMoney.oninput = calculate;
form.selectMonth.onchange = calculate;

let saveArr = [];
let accArr = [];
let withdrawalsArr = [];

function save() {
  let amountSave = document.getElementById("saveMoney")  
  let saveMoney = parseInt(amountSave.value);
  if(!saveMoney) {return}

  saveArr.push(saveMoney);
  console.log("initial value", saveArr)

  let addInitialValue = saveArr.reduce((accValue, newValue) => {
    let add = accValue + newValue;
    return add;
  });
  console.log(addInitialValue);
  accArr = addInitialValue;
  console.log("add initial value", accArr);

  document.getElementById("saveMoney").value = "";
}



function calculate() {

  let years = form.selectMonth.value;

  // let amountMoneySave = accArr * years;
  // if(!amountMoneySave) {return}

  // withdrawalsArr.push(amountMoneySave);
  // console.log("other value", withdrawalsArr);
  // let addinitialvalue = 3000

  if (years == 3) {
    let amountMoneySave = saveArr * years;
    if(!amountMoneySave) {return}
    console.log("first three months", amountMoneySave);

    showSaveMoney.innerHTML = `$ ${amountMoneySave}`;
  }
  
  if(years == 6){
    if (save() === '') {
      return saveArr * years;
    } else {
      amountMoneySave = saveArr * years;
      if(!amountMoneySave) {return}
      console.log("first six months", amountMoneySave);
  
      showSaveMoney.innerHTML = `$ ${amountMoneySave}`;
    } 
  }
}


function withdrawals(){
  let drawout = document.getElementById("drawout");
  let withdrawals = drawout.value;

  let amountWithdrawals = withdrawalsArr - withdrawals;
  console.log(amountWithdrawals);

  // if (withdrawalsArr[0]) {
  //   let amountWithdrawals = withdrawalsArr - withdrawals;
  //   console.log(amountWithdrawals);
  // }
 
  
  showSaveMoney.innerHTML = `$ ${amountWithdrawals}`;
  document.getElementById("drawout").value = "";
}


//Events listener
btnNetTotal.addEventListener('click', calculateNetTotal);
btnSave.addEventListener('click', save)
btnWithdrawals.addEventListener('click', withdrawals)