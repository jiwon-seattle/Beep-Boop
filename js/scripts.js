//User interface logic
$(document).ready(function() {
  $("#input-form").submit(function(event){
    event.preventDefault()
    var num = $("#user-input").val()
    var number = parseInt(num)
    var pigLatin = latin(num)
    var intNumbers = numbers(number)

    $("#numberResult").text(integers)
    $("#notiResult").text(pigLatin)
  })
})
//end of user interface logic

//Business logic
      var result= []
      var integers = []
      var beep = "Beep!"
      var boop = "Boop!"
      var sorry = "I'm sorry, Dave. I'm afraid I can't do that."

      var one = /[1]/i
      var two = /[2]/i
      var three = /[3]/i

      var latin = function (num) {
      for (i = 0; i <= num; i++) {
        if (i === 13) {
          result.push("I'm sorry, Dave. I'm afraid I can't do that.")
        } else if (i === 21) {
          result.push(boop)
        } else if (i === 32) {
          result.push("I'm sorry, Dave. I'm afraid I can't do that.")
        } else if (i === 0) {
          result.push('"0"')
        } else {
            if (i.toString().match(one)) {
              result.push(beep)
            } else if (i.toString().match(two)) {
              result.push(boop)
            } else if (i.toString().match(three)) {
              result.push(sorry)
            } else {
              result.push(i)
            }
          }
        } return result
      }

      var numbers = function(number) {
       for (x=0; x <= number; x++) {
         integers.push(x)
       } return integers
      }
//end of business logic
