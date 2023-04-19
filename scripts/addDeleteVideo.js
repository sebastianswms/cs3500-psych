import {cookieParse, setCookie} from './cookieManagement.js'; // Import functionality for reading and writing cookies.

/*
    Input: The user clicking on the button to add a new video.

    Output: If validation fails, returns false. If everything looks good, returns nothing.

    Remarks: Although the YouTube URL format is specified as https://www.youtube.com/watch?v=??????, it will also accept
        other similar formats (https or http; with or without www; youtube.com or youtu.be).
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

/*
    Input: The user clicking on the button to add a new video and the new video being successfully validated.

    Output: The user's new video being stored as a cookie in their browser.

    Remarks: Storing as a cookie allows the user's input to be persistent across browser sessions.
*/
window.storeNewVideo = function storeNewVideo(){

    // Get the name and URL of the video that the user added.
    let video_title = document.getElementById("new-video")["video-title"].value;
    let video_url = document.getElementById("new-video")["video-url"].value;

    // Get the current cookies corresponding to the user's videos as an array.
    let titles = cookieParse("titles");
    let videos = cookieParse("videos");

    // Add a new entry to the array of video titles and set the user's cookies accordingly.
    titles.push(video_title);
    setCookie("titles",JSON.stringify(titles),5); // 5 days until expiry.

    let url_pattern = /(?:https?\:\/\/)(?:www\.)?(?:(?:youtube\.com\/watch\?v=)|(?:youtu\.be\/))([\w-]+)&?.*/i // Source: modified starting from https://stackoverflow.com/q/19377262

    // Add a new entry to the array of video ids and set the user's cookies accordingly.
    videos.push(video_url.match(url_pattern)[1]);
    setCookie("videos",JSON.stringify(videos),5); // 5 days until expiry.

    fillVideoList(); // Update the video bank with the video that was just added.
}

/*
    Input: The user clicking on the button to delete one or more videos.

    Output: The selected videos being deleted.

    Remarks: Modifies the user's cookies to delete entries from there.
*/
window.removeVideos = function removeVideos() {
    let selection = document.querySelectorAll("input[name=video-entry]:checked"); // Get all selected videos.
    let values = [];
    selection.forEach(element => {
            if(element.value.includes(",")){
                let triplet = element.value.split(",");
                $.post( "delete.php" , { type: triplet[0] });
            }
            else{
                values.push(element.value)
            }
        }) // Put each selected index into a new array.

    // Get the current cookies corresponding to the user's videos as an array.
    let titles = cookieParse("titles");
    let videos = cookieParse("videos");

    // Delete each selected element from titles and videos, using shift++ to adjust the index as elements are deleted.
    let shift = 0;
    values.forEach(i => {titles.splice(i-shift,1); videos.splice(i-shift++,1)});

    setCookie("titles",JSON.stringify(titles),5); // 5 days until expiry.
    setCookie("videos",JSON.stringify(videos),5); // 5 days until expiry.

    fillVideoList(); // Update the video bank with the video that was just added.
}