/*$(document).ready(function(){
    $('#header1').hide();
    $('#p5').hide();
    $(window).on('scroll',function(){
            if($(window).scrolldown() ){
                
                $('#header1').show(1000);
                $('#p5').show(1200);
    
            }
        })
})*/

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active2");
      } else {
        reveals[i].classList.remove("active2");
      }
    }
  }
  
  window.addEventListener("scroll", reveal2);