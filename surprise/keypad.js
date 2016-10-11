$(function() {
  var clicked = false;

  $(".content").click(function() {
    if (!clicked) {
      var value = $(this).find(".number").text();

      if (value === ">") {
        clicked = true;
        var surpriseNumber = "";
        var counter = 0;
        $(".numberinput")
          .each(function() {
            var a = $(this).text();
            if (a) {
              surpriseNumber += a;
              counter += 1;
            }
          });
	      
	 if(counter === 4) 
	 	checkNumbers(surpriseNumber);
	 else
		 clicked = false;
      } else if (value !== "<") {
        $(".numberinput")
          .each(function() {
            var a = $(this).text();
            if (!a) {
              $(this).text(value);
              $(this).addClass("nocircle");
              return false;
            }
          });
      } else {
        $($(".numberinput").get().reverse())
          .each(function() {
            var a = $(this).text();
            if (a) {
              $(this).text("");
              $(this).removeClass("nocircle");
              return false;
            }
          });
      }
    }
  });
});

function checkNumbers(value) {	
	if(parseInt(value) === 1234)
		window.location.href = "https://www.milsomhotels.com/maison-talbooth/accommodation/";
	else {
		clicked = false;
          	alert("You have entered an invalid number");
	}
}
