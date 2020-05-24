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
  var price ={
    small :600,
    medium:1200,
    large : 1500
  };
  var crust = {
    crispy : 200,
    stuffed : 400,
    glutenfree :800
  };
  var toppings = {
       pepperoni :function(toppings2){
         if (price = 600){
           return 100;
         }
         else if (price = 1200){
           return 150;
         }
         else if (price = 1500) {
           return 250;
         }
       },
       sausage :function(toppings3){
        if (price = 600){
          return 150;
        }
        else if (price = 1200){
          return 350;
        }
        else if(price = 1500){
          return 450;
        }
      },
      mushroom :function(toppings4){
        if (price = 600){
          return 200;
        }
        else if (price = 1200){
          return 550;
        }
        else if(price = 1500){
          return 850;
        }
      }
      };
  
  $(".checkbox").click(function(){
    $("#small").append(" <b>Ksh: </b>" + price.small)
    });  
  $(".checkbox").click(function(){
    $("#medium").append(" <b>Ksh: </b>" + price.medium);
    
  });  
  $(".checkbox").click(function(){
    $("#large").append(" <b>Ksh: </b>" + price.large);
 });  
 $(".checkbox").click(function(){
  $("#crispy").append(" <b>Ksh: </b>" + crust.crispy);
});
$(".checkbox").click(function(){
  $("#stuffed").append(" <b>Ksh: </b>" + crust.stuffed);
});
$(".checkbox").click(function(){
  $("#glutenfree").append(" <b>Ksh: </b>" + crust.glutenfree);
});
$(".checkbox").click(function(toppings2){
  $("#pepperoni").append(" <b>Ksh: </b>" + toppings.pepperoni());
});
$(".checkbox").click(function(toppings3){
  $("#pepperoni").append(" <b>Ksh: </b>" + toppings.sausage());
});
$(".checkbox").click(function(toppings4){
  $("#pepperoni").append(" <b>Ksh: </b>" + toppings.mushroom());
});
});