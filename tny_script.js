"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Zeyin Wu
   Date:   04/21/2025

*/

/*Display the current data and time */

document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

/* Display the time left until New Year's Eve */
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

/* Store the current date and time */
var currentDay = new Date("May 23, 2021 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display the current date and time */
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

/* Calculate the days until January 1 */
var newYear = new Date("January 1, 2021");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

/*Calculate the hours until New Year */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

/* Calculate the minutes and seconds until New Year */
var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;


/*Display the time left until the New Year */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);

