// Get the Modal

var modal4 = document.getElementById("myModal4");


// Get button that opens modal

var btn4 = document.getElementById("myBtn4");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close4")[0];

// When button is clicked, modal opens

btn4.onclick = function() {
  modal4.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal4.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
