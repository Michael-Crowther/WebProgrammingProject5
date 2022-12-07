/*
    PORJECT 5 CHANGES:

    - Added extra comments for better readability
    - My content was already on a single page. This wasn't changed.
    - I didn't have any JavaScript issues come up from project 3.

*/



///////////////////The Modal functionality
var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
////////////////End modal functionality

///////////////Start Theme Change

document.getElementById("button").addEventListener("click", function() {
  toggleStylesheet("theme.css");
})

function toggleStylesheet(href, onoff) {
  var existingNode = 0 //get existing stylesheet node if it already exists:
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href && document.styleSheets[i].href.indexOf(href) > -1) existingNode = document.styleSheets[i].ownerNode
  }
  if (onoff == undefined) onoff = !existingNode //toggle on or off if undefined
  if (onoff) { //TURN ON:
    if (existingNode) return onoff //already exists so cancel now
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
  } else { //TURN OFF:
    if (existingNode) existingNode.parentNode.removeChild(existingNode)
  }
  return onoff
}

///////////////End Theme Change


////////////////Sticky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/////////////////End sticky nabar



//This has to go at the bottom because everything needs to be loaded before the nav
//bar links can be toggled
window.addEventListener('load', function() {
    const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
    const navbarLinks  = document.getElementsByClassName('navbar-links');
    toggleButton.addEventListener("click", function() {
        for (var i = 0; i < navbarLinks.length; i++) 
            navbarLinks[i].classList.toggle("active");
    });
    navbarLinks.addEventListener("click", function() {
      for (var i = 0; i < navbarLinks.length; i++) 
            navbarLinks[i].classList.toggle("active");
    });
});

