/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

// Before the user submits a new video, check to make sure that the user is allowed to do so.
function validateNewVideo(){
    let video_url = document.getElementById("new-video")["video-url"].value; // Get the URL of the video to be added.
    if (video_url == ""){ // If the URL is empty, tell the user what they should be doing.
    alert("Please enter a YouTube URL.")
    return false;
    }
    let url_pattern = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/i // Source: https://stackoverflow.com/q/19377262
    if (!video_url.match(url_pattern)) { // If the URL isn't in an appropriate format, tell the the user as much.
        alert("Invalid URL.");
        return false;
    }
    if(cookieParse("titles").length >= 20){ // If the video bank already has at least 20 videos, the user isn't allowed to add more.
        alert("Your video bank contains too many videos.");
        return false;
    }
}

// Store the user's new video in a cookie, allowing it to be persistent across browser sessions.
function storeNewVideo(){

    // Get the name and URL of the video that the user added.
    let video_title = document.getElementById("new-video")["video-title"].value;
    let video_url = document.getElementById("new-video")["video-title"].value;

    // Get the current cookies corresponding to the user's videos as an array.
    let titles = cookieParse("titles");
    let videos = cookieParse("videos");

    // Add a new entry to the array of video titles and set the user's cookies accordingly.
    titles.push(video_title);
    setCookie("titles",JSON.stringify(titles),5); // 5 days until expiry.

    // Add a new entry to the array of video urls and set the user's cookies accordingly.
    videos.push(video_url);
    setCookie("videos",JSON.stringify(videos),5); // 5 days until expiry.

    fillVideoList(); // Update the video bank with the video that was just added.
}

// Fill a list of checkboxes depending on the user's cookies.
function fillVideoList() {

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
        box.value = title;

        // Set the label to reference the appropriate checkbox and show the user the name they entered previously.
        label.htmlFor = "video" + index;
        label.innerHTML = title;

        // Add the checkbox and the label to the form, along with a line break for formatting purposes.
        form.appendChild(box);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    }
}

// Take a string that references a cookie JSON object and return an array that's the result of getting the cookie and parsing the JSON object.
function cookieParse(cookie){
    let unparsed = getCookie(cookie);
    return JSON.parse(unparsed == "" ? "[]" : unparsed); // Ternary operator: if the cookie is empty, parse an empty array; otherwise parse normally.
}

// Source: https://www.w3schools.com/js/js_cookies.asp (comments are mine)
function setCookie(cname, cvalue, exdays) {
  const d = new Date(); // Define a new constant to store the current date.
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds.
  let expires = "expires="+d.toUTCString(); // Create the full expiry string.
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // Combine everything together and store the cookie.
}

// Source: https://www.w3schools.com/js/js_cookies.asp (comments are mine)
function getCookie(cname) {
  let name = cname + "="; // Add an equal-sign to the parameter-provided cookie name.
  let ca = document.cookie.split(';'); // Get the user's cookies and split the result on each semicolon.
  for(let i = 0; i < ca.length; i++) { // Iterate through the cookie array.
    let c = ca[i]; // Get the value of each cookie.
    while (c.charAt(0) == ' ') { // Remove whitespace.
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) { // If the parameter-provided cookie exists, return it.
      return c.substring(name.length, c.length);
    }
  }
  return ""; // If all else fails, return a blank string.
}