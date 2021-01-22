// Get the Modal

var modal5 = document.getElementById("myModal5");


// Get button that opens modal

var btn5 = document.getElementById("myBtn5");


//Grabs the <span> element that closes the Modal

var span = document.getElementsByClassName("close5")[0];

// When button is clicked, modal opens

btn5.onclick = function() {
  modal5.style.display = "block";
}

// Upon being clicked, modal closes when x is clicked

span.onclick = function() {
  modal5.style.display = "none";
}

// Modal closes upon area outside of modal being clicked

window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
