var clicked = false;

$(function() {
  $(".content").click(function() {
    if (!clicked) {
      var value = $(this).find(".number").text();
	    
      if (value !== "<") {
	clicked = true;
        var surpriseNumber = "";
        var counter = 0;
        $(".numberinput").each(function() {
            	var a = $(this).text();
            	if (!a) {
			counter += 1;
			surpriseNumber += value;
              		$(this).text(value);
              		$(this).addClass("nocircle");
			return false;
            	}
		counter += 1;
		surpriseNumber += a;
          });
	      if(counter === 4) 
	 	checkNumbers(surpriseNumber);
	      else
		clicked = false;
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
          	swal({   title: "Wrong!",   text: "You got it wrong!",   type: "error",   confirmButtonText: "OK" });
	}
}
