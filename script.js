
window.onscroll = function() {myFunction()};
var header = document.getElementById("my-header");


var sticky = header.offsetTop;
alert(typeof sticky)

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
   
    header.classList.remove("sticky");
  }
}