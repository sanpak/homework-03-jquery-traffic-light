$(document).ready(function() {

  $('#stopButton').click(redLight);
  $('#slowButton').click(yellowLight);
  $('#goButton').click(greenLight);

  function redLight() {
    clearLights();
    $('#stopLight').css('background-color','red');
  }

  function yellowLight() {
    clearLights();
    $('#slowLight').css('background-color','yellow');
  }

  function greenLight() {
    clearLights();
    $('#goLight').css('background-color','green');
  }

  function clearLights() {
    $('#stopLight').css('background-color','black');
    $('#slowLight').css('background-color','black');
    $('#goLight').css('background-color','black');
  }


});