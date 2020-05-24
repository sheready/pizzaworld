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
