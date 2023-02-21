// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn1 = document.getElementById("option1");
var btn2 = document.getElementById("option2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";

  // TODO: Update video player for option1 and start playing it
}
btn2.onclick = function() {
  modal.style.display = "block";

  // TODO: Update video player for option1 and start playing it
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

  // TODO: Stop video
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
