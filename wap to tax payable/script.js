function tcalc(){
  // (B1) GET PRICE + PERCENTAGE
  var price = document.getElementById("taxprice").value,
      percent = document.getElementById("taxperc").value;
      qty=document.getElementById("quantity").value;
  price = parseFloat(price);
  percent = parseFloat(percent);
 
  // (B2) CALCULATE TAX AMOUNT
  var tax = (price / 100) * percent,
      grand = (price * ((100 + percent) / 100))*qty;
 
  // (B3) ROUND OFF
 
  var roundoff = function (amount, places) {
    let ea = "e" + places,
    eb = "e-" + places;
    return Number(Math.round(amount + ea) + eb);
  };
 
  
  document.getElementById("taxamt").value = tax;
  document.getElementById("taxgrand").value = grand;
  return false;
}