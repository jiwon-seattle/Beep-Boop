$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var num = $("#user-input").val();


    $("#result").text(num);

  });

});
