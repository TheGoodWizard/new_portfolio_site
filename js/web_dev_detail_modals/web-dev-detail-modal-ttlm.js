// Get the Modal

var modal3 = document.getElementById("myModal3");


// Get button that opens modal

var btn3 = document.getElementById("myBtn3");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close3")[0];

// When button is clicked, modal opens

btn3.onclick = function() {
  modal3.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal3.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
