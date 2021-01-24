function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <= 5) {
    language = "You should learn Ruby";
  } else if(total <= 9) {
    language = "You should learn Python";
  } else if (total <= 15) {
    language = "You should learn React"
  } 
  return language;
  
}

$(document).ready(function() {
  $("form#lang").submit(function(event) {
    event.preventDefault();
    const work = parseInt($("input:radio[name=work]:checked").val());
    const style = parseInt($("input:radio[name=style]:checked").val());
    const movie = parseInt($("input:radio[name=movie]:checked").val());
    const music = parseInt($("input:radio[name=music]:checked").val());
    const season = parseInt($("input:radio[name=season]:checked").val());
    let languages = results(work, style, movie, music, season);

    if (languages === "You should learn Ruby") {
      $("#answer").hide();
      $("#answer").show();
      $("#languages").text("You should learn Ruby");
    } else if (languages === "You should learn Python") {
      $("#answer").hide();
      $("#answer").show();
      $("#languages").text("You should learn Python");
    } else if (languages === "You should learn React") {
      $("#answer").hide();
      $("#answer").show();
      $("#languages").text("You should learn React");
    }
    $("#answer").show();
  });
});

