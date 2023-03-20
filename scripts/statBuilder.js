import {cookieParse, getCookie} from './cookieManagement.js'; // Import functionality for reading cookies.

window.fillStats = function fillStats() {

    let duration = document.getElementById("duration-result"); // Find the duration result element.
    let option1 = document.getElementById("option1-result"); // Find the top/left result element.
    let option2 = document.getElementById("option2-result"); // Find the bottom/right result element.

    let selection = cookieParse("selection"); // Get all selected videos.
    let options = cookieParse("option"); // Get counts for how many times each option has been chosen.
    let start = getCookie("start"); // Get the start epoch timestamp.

    
}