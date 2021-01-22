// Get the Modal

var modal9 = document.getElementById("myModal9");


// Get button that opens modal

var btn9 = document.getElementById("myBtn9");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close9")[0];

// When button is clicked, modal opens

btn9.onclick = function() {
  modal9.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal9.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
}
