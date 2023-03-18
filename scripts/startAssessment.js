import {cookieParse, setCookie} from './cookieManagement.js'; // Import functionality for reading and writing cookies.
import {generateRandomCombinations} from './orderManagement.js'; // Import functionality for generating random pairs.

/*
    Input: The user pressing on the button to begin the assessment.

    Output: If validation fails, returns false. If everything looks good, returns nothing.

    Remarks: Portions of validation should already have been completed, but double-checking is good programming practice
        so validation is performed again.
*/
window.validateStartAssessment = function validateStartAssessment(){
    let selection = document.querySelectorAll("input[name=video-entry]:checked"); // Get all selected videos.
    if(selection.length < 3 || selection.length > 10){ // If the user has selected too few or too many, display an alert.
        alert("Please select between 3 and 10 videos to use.")
        return false;
    }

    let time = document.getElementById("start-assessment")["time-to-selection"].value; // Get the time-to-selection.

    // If the time is too low or too high, display an alert.
    //This should have already been validated by the form; this is just an extra precaution.
    if(time < 3 || time > 90){
        alert("Please set a time between 3 and 90 seconds.")
        return false;
    }
}

/*
    Input: The user clicking on the button to begin the assessment and validation being successfully completed.

    Output: A series of cookies stored in the user's browser to determine how the assessment should be completed.

    Remarks: This is the final function call before the user progresses to the assessment.html page.
*/
window.startAssessment = function startAssessment(){
    let selection = document.querySelectorAll("input[name=video-entry]:checked"); // Get all selected videos.
    let values = [];
    selection.forEach(element => values.push(element.value)); // Put each selected index into a new array.

    // Array.from(Array(10).keys()) from: https://stackoverflow.com/q/3746725
    let combinations = generateRandomCombinations(Array.from(Array(values.length).keys()));

    setCookie("selection", JSON.stringify(values),5) // Ordered list of video IDs.
    setCookie("option", JSON.stringify(Array(values.length)),5) // Empty array for containing how many times an option was chosen.
    setCookie("combination",JSON.stringify(combinations),5); // Randomized combinations of video IDs.
    setCookie("orientation",document.getElementById("start-assessment")["video-location"].value, 5) // Put the user's desired orientation into a cookie.
    setCookie("presentation",document.getElementById("start-assessment")["video-presentation"].value, 5) // Put the user's desired playback type into a cookie.
    setCookie("timeout",document.getElementById("start-assessment")["time-to-selection"].value, 5) // Put the user's desired idle timeout into a cookie.

    window.location.href = "./assessment.html"; // Move on to the assessment.
}


// this function displays/hides the instructions steps, and rotate the img as icon up/down
/*
    Input: The user clicking on the Instruction text to view the instructions.

    Output: All the instruction steps will be displayed for user.

    Remarks: This is the function call when the user needs directions on home page (index.html).
*/
var inst_steps = document.getElementById("myDiv");
var inst_icon = document.getElementById("inst-img");
inst_steps.style.display = "none";
window.myFunction = function myFunction() {
    if (inst_steps.style.display == "none") {
        inst_steps.style.display = "block";
        inst_icon.style.transform = 'rotate(180deg)';
    }else {
        inst_icon.style.transform = 'rotate(-0deg)';
        inst_steps.style.display = "none";
    }
}