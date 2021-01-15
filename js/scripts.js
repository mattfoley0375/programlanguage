$(document).ready(function() {
  $("form#lang").submit(function() {
    event.preventDefault();

    const work = parseInt($("#work").val());
    const look = parseInt($("#look").val());
    
