// Get the Modal

var modal2 = document.getElementById("myModal2");


// Get button that opens modal

var btn2 = document.getElementById("myBtn2");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close2")[0];

// When button is clicked, modal opens

btn2.onclick = function() {
  modal2.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal2.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
