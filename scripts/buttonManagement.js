import {cookieParse, getCookie, setCookie} from './cookieManagement.js'; // Import functionality for reading and writing cookies.

var idleTimeout; // A timeout that will reset the buttons if the user fails to make a selection within the specified time.
var index = 0; // Stores how many choices the user has been presented with.
var timeoutLength = getCookie("timeout")*1000; // How long to wait before skipping to the next pair of options, in ms.

/*
    Input: Either 0 or 1, indicating which option the user selected.

    Output: Stores the user's selection as a cookie based on the option they selected.

    Remarks: optionIndex == 0 corresponds to left/top and optionIndex == 1 corresponds to right/bottom.
*/
window.selectOption = function selectOption(optionIndex){

    // Read the user's cookies.
    let combination = cookieParse("combination");
    let selection = cookieParse("selection");
    let videos = cookieParse("videos");
    let option = cookieParse("option");

    option[cookieParse("combination")[index][optionIndex]]++; // Increment the appropriate selection.
    setCookie("option",JSON.stringify(option),5); // Store the user's selections again. 5 days until expiry.
    
    if (optionIndex == 0) {
        let count = parseInt(getCookie("option1")) + 1;
        setCookie("option1", count, 5);
    } else if (optionIndex == 1) {
        let count = parseInt(getCookie("option2")) + 1;
        setCookie("option2", count, 5);
    }

    // Create a new iframe with a YouTube embed showing the user's selection.
    let iframeSelection = $("<iframe></iframe>").attr({
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/" + videos[selection[combination[index][optionIndex]]] + "?autoplay=1&controls=0&disablekb=1",
                allow: "autoplay"
                                                  })

    // Stop the options from displaying in the background.
    $(".outer").css("display","none")

    // Add and show the iframe, but disable pausing.
    $("#selection-player .modal-content").append(iframeSelection)
    $("iframe").css("pointer-events","none");
    $("#selection-player").css("display","block")

    clearTimeout(idleTimeout); // Stop the timeout.
    idleTimeout = setTimeout(resetButtons,timeoutLength); // Calls resetButtons after an amount of time determined by timeoutLength.
}

/*
    Input: None.

    Output: Thumbnails for the user to click on and a timeout to reset them.

    Remarks: When the page first loads, display options for the user to pick from and begin a timeout.
*/
window.initializeButtons = function initializeButtons(){
    fillButtons();

    // Add appropriate classes depending on the user's choice or orientation.
    if(getCookie("orientation") == "vertical"){
        $(".outer").addClass("video-column-outer")
        $(".inner").addClass("video-row-inner")
    }
    else {
        $(".outer").addClass("video-row-outer")
        $(".inner").addClass("video-column-inner")
    }

    idleTimeout = setTimeout(resetButtons,timeoutLength); // Calls resetButtons after an amount of time determined by timeoutLength.
}

/*
    Input: None

    Output: Thumbnails for the user to click on and a timeout to reset them. Old timeout is cleared.

    Remarks: Stops the prior timeout, increments the index, and displays a new set of options for the user to pick from.
*/
window.resetButtons = function resetButtons(){
    clearTimeout(idleTimeout); // Stop the timeout.
    $(".modal-content").empty()
    $("#selection-player").css("display","none")
    index++; // Increment the index.
    fillButtons(); // Display a new set of options for the user to pick from.
    idleTimeout = setTimeout(resetButtons,timeoutLength); // Calls resetButtons after an amount of time determined by timeoutLength.
}

/*
    Input: The user's cookies.

    Output: Adding thumbnails for the user to click on.

    Remarks: Get the videos that are for the current assessment and populate the buttons with appropriate options.
*/
window.fillButtons = function fillButtons(){

    // Read the user's cookies.
    let combination = cookieParse("combination");
    let selection = cookieParse("selection");
    let videos = cookieParse("videos");

    // If the assessment has completed, move on to the next page.
    if(index >= combination.length){
        setCookie("end", (new Date().getTime() / 1000), 5) // Saves the epoch timestamp in seconds when the assessment reaches the end.
        window.location.href = "./decision.html";
        return;
    }

    // Remove previous selection options.
    $("#option1").empty();
    $("#option2").empty();

    // Reset visibility to show options correctly.
    $(".outer").css("display","table")

    // Check whether the user wants still images or videos.
    if(getCookie("presentation") == "video"){

        // Create two iframes to hold YouTube embeds.
        let iframe1 = $("<iframe></iframe>").attr({
            width: "560",
            height: "315",
            src: "https://www.youtube.com/embed/" + videos[selection[combination[index][0]]] + "?autoplay=1&mute=1&controls=0&disablekb=1",
            allow: "autoplay"
                                              })
        let iframe2 = $("<iframe></iframe>").attr({
            width: "560",
            height: "315",
            src: "https://www.youtube.com/embed/" + videos[selection[combination[index][1]]] + "?autoplay=1&mute=1&controls=0&disablekb=1",
            allow: "autoplay"
                                              })

        // Create and add two detector divs to overlay the iframes.
        let detector1 = $("<div></div>").attr("id","detector1");
        let detector2 = $("<div></div>").attr("id","detector2");
        $("#option1").append(detector1);
        $("#option2").append(detector2);

        // Add the iframes and prevent them from being paused by setting pointer-events to none.
        $("#option1").append(iframe1);
        $("#option2").append(iframe2);
        $("iframe").css("pointer-events","none");

        // Add listeners to the detectors to check for when the user selects a video.
        $("#detector1").click(function(){selectOption(0)});
        $("#detector2").click(function(){selectOption(1)});
    }
    else {

        // Create two images with thumbnails from YouTube.
        let image1 = $("<img>").attr("src","https://i.ytimg.com/vi/" + videos[selection[combination[index][0]]] + "/hqdefault.jpg");
        let image2 = $("<img>").attr("src","https://i.ytimg.com/vi/" + videos[selection[combination[index][1]]] + "/hqdefault.jpg");

        // Add the images.
        $("#option1").append(image1);
        $("#option2").append(image2);

        // Add listeners to the images to check for when the user selects an image.
        $("#option1").click(function(){selectOption(0)});
        $("#option2").click(function(){selectOption(1)});
    }
}

// When the page loads, initialize the "buttons" for the user to select from.
$(document).ready(function(){
        initializeButtons()
})