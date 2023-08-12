
window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");


var sticky = 0; //header.offsetTop
// alert(typeof sticky)

function scrollToTop() {
    window.scrollTo({
        top: 0,
        bottom: 0,
        behavior: "auto",
    });
}


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    // alert(header)
    header.classList.add("sticky");
    
  } else {
   
    header.classList.remove("sticky");
  }
}