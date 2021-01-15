function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <= 7){
    language = "Ruby";
  } else if(total <= 11){
    language = "Python";
  } else if (total <= 15) {
    language = "React"
  } else {
    alert ('WAIT! PLEASE FILL OUT FOR ANSWER')
  }
  return language;
}

//User Logic
$(document).ready(function() {
  $("form#lang").submit(function() {
    event.preventDefault();

    const work = parseInt($("input:radio(name=work)").val());
    const style = parseInt($("input:radio(name=style)").val());
    const movie = parseInt($("input:radio(name=movie)").val());
    const music = parseInt($("input:radio(name=music)").val());
    const season = parseInt($("input:radio(name=season)").val());
    let language = results(work, style, movie, music, season)

    if (language === "Ruby") {
      $("#output").show();
      $("#answer").text("Ruby");
      $(".pic").hide();
      $("#Ru").show(); 
    } else if (language === "Python") {
      $("#output").show();
      $("#answer").text("Python");
      $(".pic").hide();
      $("#Py").show();
    } else {
      $("#output").show();
      $("#answer").text("React");
      $(".pic").hide();
      $("#Re").show();
    }
  });
});