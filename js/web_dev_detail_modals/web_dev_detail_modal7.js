// Get the Modal

var modal7 = document.getElementById("myModal7");


// Get button that opens modal

var btn7 = document.getElementById("myBtn7");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close7")[0];

// When button is clicked, modal opens

btn7.onclick = function() {
  modal7.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal7.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}
