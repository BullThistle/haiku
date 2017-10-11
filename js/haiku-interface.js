import { Haiku } from './../js/haiku.js';
$(document).ready(function() {
  $('.btn').click(function(e){
    e.preventDefault();
    let poem = $('#haikuIn').val();
    let haiku = new Haiku(poem);
    let test = haiku.syllableCount();
    let haikuOut;


    if (test[0] === 5 && test[1] === 7 && test[2] === 5) {
      haikuOut = "This is a haiku";
    }else{
      haikuOut = "This is not a haiku";
    }

    $("#haikuOut").text(haikuOut);
  });
});
