// Get the Modal

var modal6 = document.getElementById("myModal6");


// Get button that opens modal

var btn6 = document.getElementById("myBtn6");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close6")[0];

// When button is clicked, modal opens

btn6.onclick = function() {
  modal6.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal6.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
