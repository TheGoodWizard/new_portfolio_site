// Get the Modal

var modal = document.getElementById("myModal");


// Get button that opens modal

var btn = document.getElementById("myBtn");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close")[0];

// When button is clicked, modal opens

btn.onclick = function() {
  modal.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
