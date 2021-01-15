function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <= 5) {
    language = "Ruby";
  } else if(total <= 9) {
    language = "Python";
  } else if (total <= 15) {
    language = "React"
  } else {
    alert ('WAIT! PLEASE TRY AGAIN FOR AN ANSWER')
  }
  return language;
}

//User Logic
$(document).ready(function() {
  $("form#lang").submit(function(event) {
    event.preventDefault();
    const work = parseInt($("input:radio[name=work]:checked").val());
    const style = parseInt($("input:radio[name=style]:checked").val());
    const movie = parseInt($("input:radio[name=movie]:checked").val());
    const music = parseInt($("input:radio[name=music]:checked").val());
    const season = parseInt($("input:radio[name=season]:checked").val());
    let languages = results(work, style, movie, music, season);

    if (languages === "Ruby") {
      $("#answer").hide();
      $("#answer").show();
      $("#languages").text("Ruby");
    } else if (languages === "Python") {
      $("#answer").hide();
      $("#answer").show();
      $("#languages").text("Python");
    } else if (languages === "React") {
      $("#answer").hide();
      $("#answer").show();
      $("#languages").text("React");
    } else {
      $("#answer").hide();
      $("#answer").show();
      alert('FILL OUT THE SURVEY!');
    }
    $("#answer").show();
  });
});