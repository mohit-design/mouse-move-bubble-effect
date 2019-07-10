$(document).ready(function() {
	// Disabled Ctrl+U and Ctrl+C
  $(document).keydown(function(event) { 
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
      //disable key press porcessing
      return false; 
    }
  });
	// Disbaled Right Click
  window.oncontextmenu = function () {
    return false;
  }
  $(document).keydown(function(event) {
    if (event.keyCode == 123) {
      return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
    }
  });
});