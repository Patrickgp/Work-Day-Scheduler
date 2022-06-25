// GIVEN I am using a daily planner to create a schedule
let currentHour = moment().format("HH");

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
$(document).ready(function () {
    let now = moment().format("dddd, MMMM Do YYYY");
    let displayToday = document.getElementById("currentDay");
    displayToday.innerHTML = now;

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    $(".row").each(function(){
        var timeStatus = $(this).attr("id").split("-")[1];

        if (currentHour === timeStatus) {
            $(this).addClass("present");
        } else if (currentHour < timeStatus) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeStatus) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
    $(".saveBtn").click(function(event){
        event.preventDefault();
        var value = $(this).siblings(".scheduled-item").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
    });


// WHEN I refresh the page
// THEN the saved events persist
    $("#hour-09, scheduled-item").val(localStorage.getItem("09"));
    $("#hour-10, scheduled-item").val(localStorage.getItem("10"));
    $("#hour-11, scheduled-item").val(localStorage.getItem("11"));
    $("#hour-12, scheduled-item").val(localStorage.getItem("12"));
    $("#hour-13, scheduled-item").val(localStorage.getItem("13"));
    $("#hour-14, scheduled-item").val(localStorage.getItem("14"));
    $("#hour-15, scheduled-item").val(localStorage.getItem("15"));
    $("#hour-16, scheduled-item").val(localStorage.getItem("16"));
    $("#hour-17, scheduled-item").val(localStorage.getItem("17"));
});