/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

// Before the user begins the assessment, check to make sure the parameters are appropriately set.
window.validateStartAssessment = function validateStartAssessment(){
    let selection = document.querySelectorAll("input[name=video-entry]:checked"); // Get all selected videos.
    if(selection.length < 3 || selection.length > 10){ // If the user has selected too few or too many, display an alert.
        alert("Please select between 3 and 10 videos to use.")
        return false;
    }

    let time = document.getElementById("start-assessment")["time-to-selection"].value; // Get the time-to-selection.
    if(time < 3 || time > 90){ // If the time is too low or too high, display an alert. This should have already been validated by the form; this is just an extra precaution.
        alert("Please set a time between 3 and 90 seconds.")
        return false;
    }
}