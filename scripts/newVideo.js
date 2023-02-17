/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

import {cookieParse, setCookie} from './cookieManagement.js';

// Before the user submits a new video, check to make sure that the user is allowed to do so.
window.validateNewVideo = function validateNewVideo(){
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

    // Add a new entry to the array of video urls and set the user's cookies accordingly.
    videos.push(video_url);
    setCookie("videos",JSON.stringify(videos),5); // 5 days until expiry.

    fillVideoList(); // Update the video bank with the video that was just added.
}