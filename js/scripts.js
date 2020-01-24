$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault();
    var num = $("#user-input").val();
    var number = parseInt(num)

    var result= []
    var integers = []
    var beep = "Beep!"
    var boop = "Boop!"
    var sorry = "I'm sorry, Dave. I'm afraid I can't do that."

    for (x=0; x <= number; x++) {
      integers.push(x)
      console.log(numbers)
    }


    for (y=0; y < integers.length; y++) {
      if (num === "13") {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
        console.push(result)
      } else if (num === "21") {
        result.push(boop)
      } else if (num === "32") {
        result.text("I'm sorry, Dave. I'm afraid I can't do that.")
      } else {
        for (i = 0; i < num.length; i++) {
          if (num.charAt(i) === "1") {
            result.push(beep)
            console.log(result)
          } else if (num.charAt(i) === "2") {
            result.push(boop)
          } else if (num.charAt(i) === "3") {
            result.push(sorry)
          }
        }
      }
    }






    $("#result").text(result);
    $("#result").text(numbers)
  });

});
