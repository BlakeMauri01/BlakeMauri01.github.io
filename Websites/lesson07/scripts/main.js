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
// five day forecast
let day1, day2, day3, day4, day5;

var days = 0;
currentDay = (currentDate.getDay())+1;
for( i=1; currentDay <= 6; i++){
        var nameOfDay= daysOfWeek[currentDay++];
        var c = String(i);
        // document.getElementById("day"+ c).innerHTML = nameOfDay;
        days++;
    }
var remainderDays = 5 - days;  
currentDay = 0;
while (remainderDays > 0) {
    weekDay = daysOfWeek[currentDay]
    var c = String(++days);
    document.getElementById("day"+ c).innerHTML = weekDay; 
    currentDay++;
    remainderDays--;
}