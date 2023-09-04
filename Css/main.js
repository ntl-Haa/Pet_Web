$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
        $("#header").add("show");
      } else {
        $("#header").remove("show");
      }
    });
  });


  