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
const maxSeats = 4; 

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

const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function() {

  const couponElement = document.getElementById("input-field").value;
  const couponCodeEntered = couponElement.trim();
  
  // matches "NEW15" or "COUPLE 20"
  if (couponCodeEntered === "NEW15" || couponCodeEntered === "Couple 20") {
    // Check less 4
    const selectedSeatsCount = parseInt(document.getElementById("selected-seats-count").innerText);
    if (selectedSeatsCount >= 4) {
      // Apply discount
      const totalPriceElement = document.getElementById("total-price");
      let totalPriceOk  = parseInt(totalPriceElement.innerText);
      let discount = 0;

      if (couponCodeEntered === "NEW15") {
        // Apply 15
        discount = totalPriceOk * 0.15;
      } else if (couponCodeEntered === "Couple 20") {
        // Apply 20
        discount = totalPriceOk * 0.20;
        // discount = 20;
      }

      totalPriceOk -= discount;
    

      // Update the grand total
      document.getElementById("grand-total").innerText = totalPriceOk;

      // couponElement.style.display = "none";

      const inputField = document.getElementById('hide');
      inputField.style.display = 'none';

      // couponApplied = true;
    } else {
      alert("The coupon is not applicable because less than four seat is selected ");
    }
  } else {
    alert("Invalid coupon code. Please enter the correct coupon code.");
  }
});



