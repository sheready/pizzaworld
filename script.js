$(document).ready(function(){
  function formRefresh(){
    document.getElementById("form_data").reset();
  }
});
$(document).ready(function(){
 $('#btn1').click(function() {
  alert("Your location is " + $("#location2").val());

 });
});
$(document).ready(function(){
  $("#no").click(function(){
    $("#btn3").hide();
  });
  $("#yesdeliver").click(function(){
    $("#btn3").show();
  });
});
$(document).ready(function(){
  $(".checkbox").click(function(){
    $("#small").append(" <b>Ksh:200</b>.");
    });  
  $(".checkbox").click(function(){
    $("#medium").append(" <b>Ksh:700</b>.");
    
  });  
  $(".checkbox").click(function(){
    $("#large").append(" <b>Ksh:1200</b>.");
 });  
 $(".checkbox").click(function(){
  $("#crispy").append(" <b>Ksh:200</b>.");
});
$(".checkbox").click(function(){
  $("#stuffed").append(" <b>Ksh:400</b>.");
});
$(".checkbox").click(function(){
  $("#glutenfree").append(" <b>Ksh:800</b>.");
});
$(".checkbox").click(function(){
  $("#pepperoni").append(" <b>Ksh:200</b>.");
});
$(".checkbox").click(function(){
  $("#sausage").append(" <b>Ksh:600</b>.");
});
$(".checkbox").click(function(){
  $("#mushroom").append(" <b>Ksh:800</b>.");
});


  
});