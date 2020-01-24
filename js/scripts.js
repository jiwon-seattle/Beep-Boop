$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var num = $("#user-input").val();

    for (i = 0; i < num.length; i++) {
      if (num.charAt(i) === 1) {
        console.log("hi")
      } else {
        console.log('hello')
      }
    }



    $("#result").text(num);

  });

});
