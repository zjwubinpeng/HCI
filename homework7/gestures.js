var downX;
$(document).ready(function() {  
  $("#mousedown").hide();
  $("#mouseup").hide();
  $("#moveleft").hide();
  $("#moveright").hide();
  $("#doubleclick").hide();
});

$("#gestureArea").mousedown(function() {
  $("#mousedown").show(); // show element
  $("#mouseup").hide();

});

$("#gestureArea").mouseup(function() {
  $("#mousedown").hide(); // show element
  $("#mouseup").show();
});

$("#gestureArea").mousedown(function( event ) {
	downX= event.pageX;

});


$("#gestureArea").mouseup(function( event ) {
  var upX = event.pageX;

  if (upX < downX)
  {
  	$("#moveleft").show();
  	$("#moveright").hide(); 
  	$("#doubleclick").hide();

  }
  else
  {
  	$("#moveright").show();
  	$("#moveleft").hide();
  	$("#doubleclick").hide();


  }
});

$("#gestureArea").dblclick(function() {
  $("#moveleft").hide();
  $("#moveright").hide();
  $("#doubleclick").show();

});
