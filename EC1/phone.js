$(document).ready(function() { 
	$("#content_dialer").show(); 
	$("#content_list").hide(); 
	$("#content_add").hide();
	$("#content_help").hide();
});

$("#dialer").click(function() { 
	$("#content_dialer").show(); 
	$("#content_list").hide(); 
	$("#content_add").hide();
	$("#content_help").hide();
});
$("#list").click(function() { 
	$("#content_list").show(); 
	$("#content_dialer").hide(); 
	$("#content_add").hide();
	$("#content_help").hide();
});
$("#add").click(function() { 
	$("#content_add").show(); 
	$("#content_dialer").hide(); 
	$("#content_list").hide();
	$("#content_help").hide();
});
$("#help").click(function() { 
	$("#content_help").show(); 
	$("#content_dialer").hide(); 
	$("#content_list").hide();
	$("#content_add").hide();
});
$("#dialer_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
});

$("#button_dialer_clear").click(function() {
	$("#number_input").val("");
});

$('#grayscale').click(function (){
   $('link[href="phone1.css"]').attr('href','style2.css');
});
