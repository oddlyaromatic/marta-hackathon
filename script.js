$(document).ready(function(){

var newTime = "";
var windowEnd = "06:25";
var newTimeInMinutes = "";
var windowEndInMinutes = "445";

    // Click to submit search form
    $('#update').click(function(){
      newTime = $('#inputETA').val();
      if (newTime.length === 5 && $('#inputETA').val().charAt(2) === ":" ){
        $('#currETA').text(inputETA.value);
        $.post("update-time.php", {time: newTime}, function(data, status){

  var fromPHP = JSON.parse(data);
  fromPHP["bookings"][0]["eta"] = newTime;
  newTimeInMinutes = newTime.split(":");
  newTimeInMinutes = (newTimeInMinutes[0] * 60) + parseInt(newTimeInMinutes[1]);
  fromPHP["bookings"][0]["lateMin"] = (newTimeInMinutes - windowEndInMinutes).toString();
  console.log(fromPHP);
  var toPHP = JSON.stringify(fromPHP, null, 4);

  $.post("save-time.php", {json: toPHP}, function(data) {
    console.log(data);
  });

});

      }
$("#inputETA").val("");
    });


});
