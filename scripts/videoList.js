import {cookieParse} from './cookieManagement.js'; // Import functionality for reading JSON cookies.

/*
    Input: Cookies stored in the user's browser (as determined by the addDeleteVideo.js script).

    Output: A series of checkboxes showing every video the user has added to their video bank.

    Remarks: The checkboxes will have the value of the index of the video they represent.
*/
window.fillVideoList = function fillVideoList() {

    // Find the correct HTML element to modify and get the user's cookie list of video titles.
    let form = document.getElementById("start-assessment");
    let titles = cookieParse("titles");

    // Reset the form so it can be regenerated from scratch.
    form.innerHTML = "";

    // Iterate through every video title form the user's cookies.
    for (var i = 0; i < titles.length; i++) {

        // Define a text string for the each title to add to the list of videos.
        let title = titles[i];

        // Create a new input element (which will become a checkbox) and a label for that input.
        let box = document.createElement("input");
        let label = document.createElement("label");

        // Define the input element to be a checkbox and give it appropriate values for display and backend.
        box.type = "checkbox";
        box.id = "video" + i;
        box.name = "video-entry";
        box.value = i;

        // Add margin to the left of the label
        label.style.marginLeft = "7px";

        // Set the label to reference the appropriate checkbox and show the user the name they entered previously.
        label.htmlFor = "video" + i;
        label.innerHTML = title;

        // Add the checkbox and the label to the form, along with a line break for formatting purposes.
        form.appendChild(box);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    }
}