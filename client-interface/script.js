$(document).ready(function(){

    // Click to submit search form
    $('#update').click(function(){
    	var status = false;
    	if(status === false){
        	$('#status').css('background-color','red');
        	$('#status').css('color','red');
        	$('#statusText').text('Late');
        }
    });


});