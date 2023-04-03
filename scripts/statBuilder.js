import {getCookie} from './cookieManagement.js'; // Import functionality for reading cookies.

window.fillStats = function fillStats() {

    let duration = document.getElementById("duration-result"); // Find the duration result element.
    let option1 = document.getElementById("option1-result"); // Find the top/left result element.
    let option2 = document.getElementById("option2-result"); // Find the bottom/right result element.

    let start = getCookie("start"); // Get the start epoch timestamp.
    let end = getCookie("end"); // Get the start epoch timestamp.

    let total = Math.floor(end - start);
    console.log(total)

    let minutes = Math.floor(total/60)
    let seconds = Math.floor(total%60)
    duration.innerText = "Min/Sec - " + minutes.toLocaleString('en', {minimumIntegerDigits:2}) + ":" + seconds.toLocaleString('en', {minimumIntegerDigits:2}); // Updated WIP to the amount of seconds

    let count1 = parseInt(getCookie("option1"));
    let count2 = parseInt(getCookie("option2"));

    option1.innerText = "Left/Top: " + Math.floor(count1 / (count1 + count2) * 100) + "%";
    option2.innerText = "Right/Bottom: " + Math.floor(count2 / (count1 + count2) * 100) + "%";

}