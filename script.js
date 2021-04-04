$(document).ready(function() {
    //function that displays current time and date//
    const currentDay = $("#currentDay");
    function timeDate () {
        currentDay.text(moment().format("MMMM Do YYYY h:mm:ss a"));
        $('.jumbotron').css({'background-color':' black'});

    };

    //updates time every second
    setInterval(timeDate, 1000);  

})
