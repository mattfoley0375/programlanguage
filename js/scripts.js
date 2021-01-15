$(document).ready(function() {
  $("form#lang").submit(function() {
    event.preventDefault();

    const work = parseInt($("#work").val());
    const style = parseInt($("#style").val());
    const movie = parseInt($("#movie").val());
