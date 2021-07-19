//clase 12 redes informaticas
// 
document.querySelector('.btn-menu').addEventListener('click', ()=>{
  // console.log('clik!!!');
  document.querySelector('.nav-items').classList.toggle('show');
});

const btnClose = document.getElementById("close");
const btnCleanBox = document.getElementById("cleanBox");
const btnCleanContent = document.getElementById("cleanContent")
const totalToPay = document.getElementById("totalToPay");
const productContent = document.getElementById("product-content");
const productContent1 = document.getElementById("product-content1")

const btnCouponsProducts = () => {
  productContent1.style.display = 'block';
  productContent.style.display = 'none';
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

  return priceWithDiscount;
}

const whatYouSave = (price, discount) => {
  const porcentageOfDiscountedPrice = 100 - discount;
  const priceWithDiscount = (price * porcentageOfDiscountedPrice)/100;

  let  youSave = price - priceWithDiscount;
  return youSave; 
}


const buttonCalculateDiscountPrice = () => {
  const inputPrice = document.getElementById("inputPrice")
  const priceValue = parseFloat(inputPrice.value)
  const inputDiscount = document.getElementById("inputDiscount")
  const discountValue = parseFloat(inputDiscount.value);
  const totalToPay = document.getElementById("totalToPay");

  const PriceWithDiscount = calculateDiscountPrice(priceValue, discountValue);
  totalToPay.innerText = `$ ${PriceWithDiscount.toFixed(2)}`;

}


// con valor de entrada input
// const validateCouponsInput = () => {
//   const coupons = [10, 25, 50];
//   const inputCoupon = document.getElementById("inputCoupon");
//   const couponValue = parseFloat(inputCoupon.value);

//   if (!coupons.includes(couponValue)) {
//     console.log(`The coupons ${couponValue} is invalid!`);
//   }else if(couponValue === coupons[0]){
//     console.log("cupon valido 10");
//     return coupons[0];
//   }else if(couponValue === coupons[1]){
//     console.log("cupon valido 25");
//     return coupons[1];
//   }else if(couponValue === coupons[2]){
//     console.log("cupon valido 50");
//     return coupons[2];
//   }else{
//     return 0;
//   }
// }

//con menu selector
const confirmCoupons = function () {
  const coupons = [10, 25, 50];
  const selectCoupons = document.getElementById("selectCoupons");
  const couponValue = parseFloat(selectCoupons.value);

  // const percentDiscount = document.getElementById("percentDiscount");
  // percentDiscount.innerText = `-${couponValue}%`;

  if (couponValue === coupons[0]) {
    console.log("cupon valido 10");
    return coupons[0];
  } else if (couponValue === coupons[1]) {
    console.log("cupon valido 25");
    return coupons[1];
  } else if (couponValue === coupons[2]) {
    console.log("cupon valido 50");
    return coupons[2];
  } else {
    return 0;
  }
}

const buttonCalculateDiscountCoupons = () => {
  const inputPrice = document.getElementById("couponsInputPrice")
  const priceValue = parseFloat(inputPrice.value)
  const inputDiscount = document.getElementById("couponsInputDiscount")
  const discountValue = parseFloat(inputDiscount.value);
  const validateCoupons = confirmCoupons();
  const discountCoupons = discountValue + validateCoupons;

  const PriceWithDiscount = calculateDiscountPrice(priceValue, discountCoupons);
  const youSave = whatYouSave(priceValue, discountCoupons);

  const percentDiscount = document.getElementById("percentDiscount");
  percentDiscount.innerText = `-${discountCoupons}%`; 
   console.log(discountCoupons);

  const originalPrice = document.getElementById("originalPrice");
  const price = priceValue;
  originalPrice.innerText = `$${price}`;

   const priceDiscount = document.getElementById("priceDiscount");
  priceDiscount.innerText = `$${PriceWithDiscount}`

  const youSaveTheAmountOf = document.getElementById("youSaveTheAmountOf");
  youSaveTheAmountOf.innerText = `Te ahorraste: $ ${youSave.toFixed(2)}`;
}

const cleanBox = () => {
  document.getElementById("inputPrice").value = "";
  document.getElementById("inputDiscount").value = "";
  totalToPay.innerHTML = "";
  console.log("clear box")
}
const cleanContent = () => {
  document.getElementById("couponsInputDiscount").value = "";
  document.getElementById("couponsInputPrice").value = "";
  document.getElementById("selectCoupons").value = `------`;
  document.getElementById("percentDiscount").innerHTML = `-00%`;
  document.getElementById("originalPrice").innerHTML = `$0000`;
  document.getElementById("priceDiscount").innerHTML = `$0000`;
  document.getElementById("youSaveTheAmountOf").innerHTML = "";

  console.log("clean content")
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

}

//Evenst Listener
btnClose.addEventListener('click', close);
btnCleanBox.addEventListener('click', cleanBox);
btnCleanContent.addEventListener('click', cleanContent)