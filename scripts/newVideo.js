import {cookieParse, setCookie} from './cookieManagement.js'; // Import functionality for reading and writing cookies.

// Before the user submits a new video, check to make sure that the user is allowed to do so.

/* 

input: a url as input to algorithm foo.

output: The result of the algorithm foo on input in is the validation of the video url.

remarks: this function ensure that the user enters a valid youtube url. 

*/
window.validateNewVideo = function validateNewVideo(){
    let video_url = document.getElementById("new-video")["video-url"].value; // Get the URL of the video to be added.
    if (video_url == ""){ // If the URL is empty, tell the user what they should be doing.
    alert("Please enter a YouTube URL.")
    return false;
    }
    let url_pattern = /(?:https?\:\/\/)(?:www\.)?(?:(?:youtube\.com\/watch\?v=)|(?:youtu\.be\/))([\w-]+)&?.*/i // Source: modified starting from https://stackoverflow.com/q/19377262
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

/* 

input: Video title name and video url as input to algorithm foo

output: Adds the videos the user enters into array, and stores the videos and titels into the video bank as cookies

remarks: This function stores the user's new video(s) in a cookie and keeps them for 5 days

*/
window.storeNewVideo = function storeNewVideo(){

    // Get the name and URL of the video that the user added.
    let video_title = document.getElementById("new-video")["video-title"].value;
    let video_url = document.getElementById("new-video")["video-url"].value;

    // Get the current cookies corresponding to the user's videos as an array.
    let titles = cookieParse("titles");
    let videos = cookieParse("videos");
    let option = cookieParse("option");

    // Add a new entry to the array of video titles and set the user's cookies accordingly.
    titles.push(video_title);
    setCookie("titles",JSON.stringify(titles),5); // 5 days until expiry.

    let url_pattern = /(?:https?\:\/\/)(?:www\.)?(?:(?:youtube\.com\/watch\?v=)|(?:youtu\.be\/))([\w-]+)&?.*/i // Source: modified starting from https://stackoverflow.com/q/19377262

    // Add a new entry to the array of video ids and set the user's cookies accordingly.
    videos.push(video_url.match(url_pattern)[1]);
    setCookie("videos",JSON.stringify(videos),5); // 5 days until expiry.

    fillVideoList(); // Update the video bank with the video that was just added.
}