function play(){
  const homeSection = document.getElementById('home-screen');
  homeSection.classList.add('block')
  // console.log(homeSection.classList)
}

// count 1 , 2
let ticketClickCount = 0;
let titleCountAdd =1;

let totalPrice = 0;

const totalSeat =40;

let selectSeat =0;
let SeatLeft =totalSeat;


const kbds = document.querySelectorAll(".kbd")
//console.log(kbds);

for (let index = 0; index < kbds.length; index++) {
  const kbd = kbds[index];
  //console.log(kbd)
  kbd.addEventListener("click", function(){
    //console.log("clicked")

    ticketClickCount++;

    document.getElementById("selected-seats-count").innerText = ticketClickCount;


    // seat left
    if(SeatLeft >0){
      selectSeat++;
      document.getElementById("selected-seats-count").innerText= selectSeat;
      SeatLeft--;
      document.getElementById("seatsLeft").innerText=SeatLeft;

      kbd.style.backgroundColor = "green";
    }else{
      alert("no seats left")
    }



    // seat number get
    const title = kbd.querySelector("h4").innerText;
    // console.log(title.innerText);


    // prince
    const price = parseInt(kbd.querySelector("span").innerText.split(" ")[0]);
   // console.log(price)
    //console.log(title, price.innerHTML);

    const titleContainer =document.getElementById("title-container");

    const p = document.createElement("p");
    p.innerText =title  ;
    // p.innerText =title + " " + "economy" +" " + price ;
    titleContainer.appendChild(p)

    const titleEcoContainer = document.getElementById("title-eco");
    const pClass = document.createElement("p");
    pClass.innerText = "economy";
    pClass.classList.add("class");
    titleEcoContainer.appendChild(pClass);

    const priceContainer = document.getElementById("price-container");
    const pPrice = document.createElement("p");
    pPrice.innerText = price;
    priceContainer.appendChild(pPrice);

    // const titleContainer2 =document.getElementById("title-eco");

    // const h4= document.createElementById("h4");
    // h4.innerText= "economy";
    // titleContainer2.appendChild(h4)


    // price
    totalPrice+= price;
    //console.log(totalPrice);
    document.getElementById("total-price").innerText= totalPrice;


  });
}

// Define the constant for the coupon code
// const couponCode = "NEW15";

// // Define the event listener for the Apply button
// const applyBtn = document.getElementById("apply-btn");
// applyBtn.addEventListener("click", function() {
//   // Get the value from the input field
//   const couponElement = document.getElementById("input-field").value;
//   const couponCodeEntered = couponElement.trim();
  
//   // Check if the coupon code matches
//   if (couponCodeEntered === couponCode) {
//     // Check if only one seat is selected or fewer than 5 seats are selected
//     const selectedSeatsCount = parseInt(document.getElementById("selected-seats-count").innerText);
//     if (selectedSeatsCount <! 4 || selectedSeatsCount < 5) {
//       // Apply the discount
//       const totalPriceElement = document.getElementById("total-price");
//       let totalPriceOk  = parseInt(totalPriceElement.innerText);
//       // Apply 15% discount
//       const discount = totalPriceOk * 0.15;
//       totalPriceOk -= discount;
      
//       // Update the total price display
//      // totalPriceElement.innerText = totalPriceOk;

//       // Update the grand total
//       document.getElementById("grand-total").innerText = totalPriceOk;
//     } else {
//       alert("The coupon is not applicable because more than one seat is selected and there are 5 or more seats selected.");
//     }
//   } else {
//     alert("Invalid coupon code. Please enter the correct coupon code.");
//   }
// });


// let couponApplied = false;
// Define the event listener for the Apply button
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function() {


  // if (couponApplied) {
  //   alert("Only one coupon can be applied.");
  //   return; // Exit the function early if a coupon has already been applied
  // }

  // Get the value from the input field
  const couponElement = document.getElementById("input-field").value;
  const couponCodeEntered = couponElement.trim();
  
  // Check if the coupon code matches "NEW15" or "COUPLE 20"
  if (couponCodeEntered === "NEW15" || couponCodeEntered === "COUPLE 20") {
    // Check if only one seat is selected or fewer than 5 seats are selected
    const selectedSeatsCount = parseInt(document.getElementById("selected-seats-count").innerText);
    if (selectedSeatsCount <= 1 || selectedSeatsCount < 5) {
      // Apply the discount
      const totalPriceElement = document.getElementById("total-price");
      let totalPriceOk  = parseInt(totalPriceElement.innerText);
      let discount = 0;

      if (couponCodeEntered === "NEW15") {
        // Apply 15% discount for "NEW15"
        discount = totalPriceOk * 0.15;
      } else if (couponCodeEntered === "COUPLE 20") {
        // Apply $20 discount for "COUPLE 20"
        discount = 20;
      }

      totalPriceOk -= discount;
      
      // Update the total price display
      //totalPriceElement.innerText = totalPriceOk;

      // Update the grand total
      document.getElementById("grand-total").innerText = totalPriceOk;

      couponElement.style.display = "none";


      // couponApplied = true;
    } else {
      alert("The coupon is not applicable because more than one seat is selected or there are 5 or more seats selected.");
    }
  } else {
    alert("Invalid coupon code. Please enter the correct coupon code.");
  }
});




// const btn =document.getElementById("apply-btn");
// // console.log(btn)

// btn.addEventListener("click", function(){

//  // console.log("clickeddd")

//   // get value from cupon
//   const couponElement = document.getElementById("input-field").value;
//   const cuponCode =couponElement.split(" ")
//   // input thek a value nile .value
//   //console.log(couponElement.value)
//   if()
// })

