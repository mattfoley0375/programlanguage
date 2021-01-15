function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <= 6) {
    language = "Ruby";
  } else if(total <= 10) {
    language = "Python";
  } else if (total <= 14) {
    language = "React"
  } else {
    alert ('WAIT! PLEASE FILL OUT FOR ANSWER')
  }
  return language;
}

//User Logic
$(document).ready(function() {
  $("form#lang").submit(function(event) {
    event.preventDefault();
    const work = parseInt($("input:radio[name=work]").val());
    const style = parseInt($("input:radio[name=style]").val());
    const movie = parseInt($("input:radio[name=movie]").val());
    const music = parseInt($("input:radio[name=music]").val());
    const season = parseInt($("input:radio[name=season]").val());
    let languages = results(work, style, movie, music, season)

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
      $("languages").show();
      alert('FILL OUT THE SURVEY!');
    }
    $("#answer").show();
  });
});