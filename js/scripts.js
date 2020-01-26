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

    var one = /[1]/i;
    var two = /[2]/i;
    var three = /[3]/i;


      if (num === "13") {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (num === "21") {
        result.push(boop)
      } else if (num === "32") {
        result.push("I'm sorry, Dave. I'm afraid I can't do that.")
      } else if (num === "0") {
        result.push('"0"')
      } else {
        for (i = 0; i < num.length; i++) {
          if (num[i].match(one)) {
            result.push(beep)
            console.log(result)
            break
          } else if (num[i].match(two)) {
            result.push(boop)
            break
          } else if (num[i].match(three)) {
            result.push(sorry)
            break
          } else {
            result.push(num)
            break
          }
        }
      }

    for (x=0; x <= number; x++) {
      integers.push(x)
    }

    $("#numberResult").text(integers)
    $("#notiResult").append(result + ",");

  });

});
