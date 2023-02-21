/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

import {cookieParse, setCookie} from './cookieManagement.js';
import {generateRandomCombinations} from './orderManagement.js';

// Before the user begins the assessment, check to make sure the parameters are appropriately set.
window.validateStartAssessment = function validateStartAssessment(){
    let selection = document.querySelectorAll("input[name=video-entry]:checked"); // Get all selected videos.
    if(selection.length < 3 || selection.length > 10){ // If the user has selected too few or too many, display an alert.
        alert("Please select between 3 and 10 videos to use.")
        return false;
    }

    let time = document.getElementById("start-assessment")["time-to-selection"].value; // Get the time-to-selection.
    if(time < 3 || time > 90){ // If the time is too low or too high, display an alert. 
                               //This should have already been validated by the form; this is just an extra precaution.
        alert("Please set a time between 3 and 90 seconds.")
        return false;
    }
}

// Store the user's selected video URLs in a cookie and navigate to the assessment page.
window.startAssessment = function startAssessment(){
    let selection = document.querySelectorAll("input[name=video-entry]:checked"); // Get all selected videos.
    let values = [];
    selection.forEach(element => values.push(element.value)); // Put each selected index into a new array.

    // Array.from(Array(10).keys()) from: https://stackoverflow.com/q/3746725
    let combinations = generateRandomCombinations(Array.from(Array(values.length).keys()));

    setCookie("selection", JSON.stringify(values),5) // Ordered list of video IDs.
    setCookie("option", JSON.stringify(Array(values.length)),5) // Empty array for containing how many times an option was chosen.
    console.log(cookieParse("option"));
    setCookie("combination",JSON.stringify(combinations),5); // Randomized combinations of video IDs.
    setCookie("orientation",document.getElementById("start-assessment")["video-location"].value, 5) // Put the user's desired orientation into a cookie.
    setCookie("presentation",document.getElementById("start-assessment")["video-presentation"].value, 5) // Put the user's desired playback type into a cookie.
    setCookie("timeout",document.getElementById("start-assessment")["time-to-selection"].value, 5) // Put the user's desired idle timout into a cookie.

    window.location.href = "./assessment.html";
}
