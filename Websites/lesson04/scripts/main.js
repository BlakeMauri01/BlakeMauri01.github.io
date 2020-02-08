var currentDateString;

var currentDate = new Date();
var weekDayNumber= currentDate.getDay();
//Get day of week

var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuday"
];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ", ";

currentDateString += currentDate.getDate();

var months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += " " + month;

currentDateString += " " + currentDate.getFullYear();

document.getElementById("currentDate").innerHTML = currentDateString;

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
