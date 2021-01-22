// Get the Modal

var modal8 = document.getElementById("myModal8");


// Get button that opens modal

var btn8 = document.getElementById("myBtn8");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close8")[0];

// When button is clicked, modal opens

btn8.onclick = function() {
  modal8.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal8.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}
