$(document).ready(function(){


checkTime();

var newTime = "";
var windowEnd = "06:55";
var newTimeInMinutes = "";
var windowEndInMinutes = "415";


function checkTime(){
    $.ajax({url: "marta.json", success: function(result){
        console.log(result);
        newTime = result["bookings"][0]["eta"];
        newTimeInMinutes = newTime.split(":");
        newTimeInMinutes = (newTimeInMinutes[0] * 60) + parseInt(newTimeInMinutes[1]);


        if(newTimeInMinutes > windowEndInMinutes) {
        $('#currETA').text(newTime);
        $('#currETA').css('background-color','red');
        $('#status').css('color','red');
        $('#statusText').text('Late');
        }

        else {
          $('#currETA').text("06:55");
        $('#currETA').css('background-color','green');
        }
    }});

}

$("#update").click(checkTime);


console.log("hey there");


});
