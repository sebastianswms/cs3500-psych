/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

import {cookieParse} from './cookieManagement.js';

// Fill a list of checkboxes depending on the user's cookies.
window.fillVideoList = function fillVideoList() {

    // Find the correct HTML element to modify and get the user's cookie list of video titles.
    let form = document.getElementById("start-assessment");
    let titles = cookieParse("titles");

    // Reset the form so it can be regenerated from scratch.
    form.innerHTML = "";

    // Iterate through every video title form the user's cookies.
    for (var index in titles) {

        // Define a text string for the each title to add to the list of videos.
        let title = titles[index];

        // Create a new input element (which will become a checkbox) and a label for that input.
        let box = document.createElement("input");
        let label = document.createElement("label");

        // Define the input element to be a checkbox and give it appropriate values for display and backend.
        box.type = "checkbox";
        box.id = "video" + index;
        box.name = "video-entry";
        box.value = index;

        // Set the label to reference the appropriate checkbox and show the user the name they entered previously.
        label.htmlFor = "video" + index;
        label.innerHTML = title;

        // Add the checkbox and the label to the form, along with a line break for formatting purposes.
        form.appendChild(box);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    }
}