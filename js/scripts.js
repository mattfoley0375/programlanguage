function results(input1, input2, input3) {
  const total = input1 + input2 + input3;

  if(total <= 5){
    language = "Ruby";
  } else if(total <= 7){
    language = "Python";
  } else {
    language = "React";
  }
  return language;
}

//User Logic
$(document).ready(function() {
  $("form#lang").submit(function() {
    event.preventDefault();

    const work = parseInt($("#work").val());
    const style = parseInt($("#style").val());
    const movie = parseInt($("#movie").val());
    const music = parseInt($("#music").val());
    const season = parseInt($("#season").val());
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