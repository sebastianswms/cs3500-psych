import {cookieParse, getCookie, setCookie} from './cookieManagement.js'; // Import functionality for reading and writing cookies.

var idleTimeout; // A timeout that will reset the buttons if the user fails to make a selection within the specified time. -->
var index = 0; // Stores how many choices the user has been presented with.
var timeoutLength = getCookie("timeout")*1000; // How long to wait before skipping to the next pair of options, in ms.

// Store the user's selection based on the option they selected.
// optionIndex == 0 corresponds to left/top and optionIndex == 0 corresponds to right/bottom.
window.selectOption = function selectOption(optionIndex){
    let option = cookieParse("option"); // Get the user's past selections.
    option[cookieParse("combination")[index][optionIndex]]++; // Increment the appropriate selection.
    setCookie("option",JSON.stringify(option),5); // Store the user's selections again. 5 days until expiry.
    resetButtons(); // Reset the buttons for the next pair of options.
}

// When the page first loads, display options for the user to pick from and begin a timeout.
window.initializeButtons = function initializeButtons(){
    fillButtons();
    idleTimeout = setTimeout(resetButtons,timeoutLength); // Calls resetButtons after an amount of time determined by timeoutLength.
}

// Stops the prior timeout, increments the index, and displays a new set of options for the user to pick from.
window.resetButtons = function resetButtons(){
    clearTimeout(idleTimeout); // Stop the timeout.
    index++; // Increment the index.
    fillButtons(); // Display a new set of options for the user to pick from.
    idleTimeout = setTimeout(resetButtons,timeoutLength); // Calls resetButtons after an amount of time determined by timeoutLength.
}

// Get the videos that are for the current assessment and populate the buttons with appropriate options.
window.fillButtons = function fillButtons(){

    // Read the user's cookies.
    let combination = cookieParse("combination");
    let selection = cookieParse("selection");
    let videos = cookieParse("videos");

    // If the assessment has completed, move on to the next page.
    if(index >= combination.length){
        window.location.href = "./decision.html";
        return;
    }

    // Find the two buttons.
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");

    // Clear the two buttons.
    option1.innerHTML = "";
    option2.innerHTML = "";

    // Define two new images.
    let image1 = document.createElement("img");
    let image2 = document.createElement("img");

    // Get high-quality (hqdefault) thumbnails for the pair of videos and set the images to them.
    // Eventually this will have a check for whether it should be thumbnails or video playback.
    image1.src = "https://i.ytimg.com/vi/" + videos[selection[combination[index][0]]] + "/hqdefault.jpg";
    image2.src = "https://i.ytimg.com/vi/" + videos[selection[combination[index][1]]] + "/hqdefault.jpg";

    // Put each image in its respective button.
    option1.appendChild(image1);
    option2.appendChild(image2);
}