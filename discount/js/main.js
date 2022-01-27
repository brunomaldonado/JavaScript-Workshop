const navbarToggle = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

navbarToggle.addEventListener('click', () => {
  if(!menuOpen) {
    navbarToggle.classList.add('open');
    menuOpen = true;
  } else {
    navbarToggle.classList.remove('open');
    menuOpen = false;
  }
  navMenu.classList.toggle('active');
  bars.forEach(child => {
    child.classList.toggle('animation')
  })
})

const btnCalculateDiscountCoupons = document.getElementById("buttonCalculateDiscountCoupons");
const btnClose = document.getElementById("close");
const btnCleanBox = document.getElementById("cleanBox");
const btnCleanContent = document.getElementById("cleanContent")
const totalToPay = document.getElementById("totalToPay");
const productContent = document.getElementById("product-content");
const productContent1 = document.getElementById("product-content1");
const headerTitleContainer = document.querySelector(".header--title-container");

const btnShowCoupons = document.getElementById("showCoupons")
const myModal = document.getElementById("myModal")

const btnCouponsProducts = () => {
  productContent1.style.display = 'block';
  productContent.style.display = 'none';
  headerTitleContainer.style.display = 'none';
}

// const originalPrice = 120;
// const discount = 18;
// const porcentageOfDiscountedPrice = 100 - discount;
// const priceWithDiscount = (originalPrice * porcentageOfDiscountedPrice) / 100;

// console.log({
//   originalPrice,
//   discount,
//   porcentageOfDiscountedPrice,
//   priceWithDiscount
// })


//Formula
const calculateDiscountPrice = (price, discount) => {
  const porcentageOfDiscountedPrice = 100 - discount;
  const priceWithDiscount = (price * porcentageOfDiscountedPrice) / 100;

  if (isNaN(priceWithDiscount)) {
    return
  }

  return priceWithDiscount;
}

const whatYouSave = (price, discount) => {
  const porcentageOfDiscountedPrice = 100 - discount;
  const priceWithDiscount = (price * porcentageOfDiscountedPrice) / 100;

  let youSave = price - priceWithDiscount;
  if (isNaN(youSave)) {
    return
  }

  return youSave;
}


// const buttonCalculateDiscountPrice = () => {
//   const inputPrice = document.getElementById("inputPrice")
//   const priceValue = parseFloat(inputPrice.value)
//   const inputDiscount = document.getElementById("inputDiscount")
//   const discountValue = parseFloat(inputDiscount.value);
//   const totalToPay = document.getElementById("totalToPay");

//   let PriceWithDiscount = calculateDiscountPrice(priceValue, discountValue);
//   console.log("Price with discount IS:", PriceWithDiscount);

//   totalToPay.innerText = `$ ${PriceWithDiscount.toFixed(2)}`;

// }

const inputPrice = document.getElementById("inputPrice");
inputPrice.addEventListener('input', showPrice);

const inputDiscount = document.getElementById("inputDiscount")
inputDiscount.addEventListener('input', showPrice);

function showPrice() {
  let input = document.getElementById("inputPrice");
  const originalPrice = Number(input.value);
  input = document.getElementById("inputDiscount");
  const discountPercentage = Number(input.value);

  resultPrice = calculateDiscountPrice(originalPrice, discountPercentage);

  showResult = document.getElementById("totalToPay")
  showResult.innerText = `$ ${resultPrice}`;
}


// con valor de entrada input .- Solución #2: legibilidad, error first y muerte al switch
const mayus = (e) => e.value = e.value.toUpperCase();

const validateCouponsInput = () => {
  const coupons = [10, 25, 50, "BUXl0110", "XEZV1100", "BMJS0101"];
  const selectCoupons = document.getElementById("selectCoupons");
  const couponValues = parseFloat(selectCoupons.value);
  const inputCoupon = document.getElementById("inputCoupons");
  const couponValue = (inputCoupon.value);
  let discount;

  if (!coupons.includes(couponValue)) {
    // alert("invalid! coupons");
    inputCoupon.disabled = false;
    selectCoupons.disabled = true;
    document.getElementById("inputCoupons").value = "";
    console.log(`The coupons ${couponValue} is invalid!`);
  } else if (couponValue === 'BUXl0110') {
    discount = 10;
    return discount;
  } else if (couponValue === "XEZV1100") {
    discount = 25;
    return discount;
  } else if (couponValue === "BMJS0101") {
    discount = 50;
    return discount;
  } else {
    return 0;
  }

  if (couponValues === coupons[0]) {
    inputCoupon.disabled = true;
    return coupons[0];
  } else if (couponValues === coupons[1]) {
    inputCoupon.disabled = true;
    return coupons[1];
  } else if (couponValues === coupons[2]) {
    inputCoupon.disabled = true;
    return coupons[2];
  } else {
    return 0;
  }
}

//con menu selector
// const confirmCouponsSelect = () => {
//   const coupons = [10, 25, 50];
//   const selectCoupons = document.getElementById("selectCoupons");
//   const couponValue = parseFloat(selectCoupons.value);

//   if (couponValue === coupons[0]) {
//     return coupons[0];
//   } else if (couponValue === coupons[1]) {
//     return coupons[1];
//   } else if (couponValue === coupons[2]) {
//     return coupons[2];
//   } else {
//     return 0;
//   }
// }

const buttonCalculateDiscountCoupons = () => {
  const inputPrice = document.getElementById("couponsInputPrice")
  const priceValue = parseFloat(inputPrice.value)
  const inputDiscount = document.getElementById("couponsInputDiscount")
  const discountValue = parseFloat(inputDiscount.value);
  // const validateCouponsSel = confirmCouponsSelect();
  const validateCouponsInp = validateCouponsInput();
  const discountCoupons = discountValue + validateCouponsInp;

  const PriceWithDiscount = calculateDiscountPrice(priceValue, discountCoupons);
  const youSave = whatYouSave(priceValue, discountCoupons);

  const percentDiscount = document.getElementById("percentDiscount");
  percentDiscount.innerText = `-${discountCoupons}%`;

  const originalPrice = document.getElementById("originalPrice");
  const price = priceValue;
  originalPrice.innerText = `$${price}`;

  const priceDiscount = document.getElementById("priceDiscount");
  priceDiscount.innerText = `$${PriceWithDiscount}`

  const youSaveTheAmountOf = document.getElementById("youSaveTheAmountOf");
  youSaveTheAmountOf.innerText = `Te ahorraste: $ ${youSave.toFixed(2)}`;

  console.log("button discount coupons", priceValue, discountValue, youSave)

}

const cleanBox = () => {
  document.getElementById("inputPrice").value = "";
  document.getElementById("inputDiscount").value = "";
  totalToPay.innerHTML = "";
}
const cleanContent = () => {
  document.getElementById("couponsInputDiscount").value = "";
  document.getElementById("couponsInputPrice").value = "";
  document.getElementById("selectCoupons").value = `------`;
  document.getElementById("percentDiscount").innerHTML = `-00%`;
  document.getElementById("originalPrice").innerHTML = `$0000`;
  document.getElementById("priceDiscount").innerHTML = `$0000`;
  document.getElementById("youSaveTheAmountOf").innerHTML = "";
  document.getElementById("inputCoupons").value = "";

  // console.log("clean content")
  selectCoupons.disabled = false;
  inputCoupon.disabled = false;

}

const close = () => {
  document.getElementById("inputPrice").value = "";
  document.getElementById("inputDiscount").value = "";
  totalToPay.innerHTML = "";
  document.getElementById("couponsInputDiscount").value = "";
  document.getElementById("couponsInputPrice").value = "";
  document.getElementById("selectCoupons").value = `------`;
  document.getElementById("percentDiscount").innerHTML = `-00%`;
  document.getElementById("originalPrice").innerHTML = `$0000`;
  document.getElementById("priceDiscount").innerHTML = `$0000`;
  document.getElementById("youSaveTheAmountOf").innerHTML = "";

  productContent1.style.display = 'none';
  productContent.style.display = 'block';

  headerTitleContainer.style.display = 'block';
}

const closeBanner = () => {
  // console.log("closeBanner")
  myModal.style.display = 'none';
}

const showCoupons = () => {
  // console.log("Show Coupons")
  myModal.style.display = 'block';
}

//Evenst Listener
btnClose.addEventListener('click', close);
btnCleanBox.addEventListener('click', cleanBox);
btnCleanContent.addEventListener('click', cleanContent)
btnCalculateDiscountCoupons.addEventListener('click', buttonCalculateDiscountCoupons)
btnShowCoupons.addEventListener('click', showCoupons);

const mediumBp = matchMedia('(min-width: 1023px)');

// function refresh() {
//   // window.location.reload();
//   // setTimeout(function () {
//   //   window.location.reload(false);
//   // }, 100);
//   window.location.hash = "reload";
//   console.log("Refreshing")
// }

const refresh = () => {
  window.location.reload();
  window.location.hash = "reload";
  console.log("Refreshing")
}

const changeSize = mql => {
  mql.matches ?
    window.onload = refresh() :
    document.body.style.background = '';
}

mediumBp.addListener(changeSize);
// changeSize(mediumBp);