//This is for .css().  It will add background color to the HTML.

/*$(document).ready(function() {

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
*/

//want to try adding style to class.

$(document).ready(function() {

  $('#stopButton').click(redLight);
  $('#slowButton').click(yellowLight);
  $('#goButton').click(greenLight);

  function redLight() {
    clearLights();
    $('#stopLight').attr('class','redBulb');
  }

  function yellowLight() {
    clearLights();
    $('#slowLight').attr('class','yellowBulb');
  }

  function greenLight() {
    clearLights();
    $('#goLight').attr('class','greenBulb');
  }

  function clearLights() {
    $('#stopLight').attr('class','blackBulb');
    $('#slowLight').attr('class','blackBulb');
    $('#goLight').attr('class','blackBulb');
  }
  

});