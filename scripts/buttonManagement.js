/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/
//

import {cookieParse, getCookie} from './cookieManagement.js';

var idleTimeout;
var index = 0;
console.log(getCookie("timeout"));
var timeoutLength = getCookie("timeout")*1000;

window.resetButtons = function resetButtons(){
    clearTimeout(idleTimeout);
    fillButtons();
    index++;
    idleTimeout = setTimeout(resetButtons,timeoutLength);
}

window.fillButtons = function fillButtons(){

    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");

    option1.innerHTML = "";
    option2.innerHTML = "";

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");

    image1.src = "https://i.ytimg.com/vi/" + cookieParse("videos")[cookieParse("selection")[index][0]] + "/maxresdefault.jpg";
    image2.src = "https://i.ytimg.com/vi/" + cookieParse("videos")[cookieParse("selection")[index][1]] + "/maxresdefault.jpg";
// "https://www.youtube.com/embed/" + cookieParse("videos")[cookieParse("selection")[index][0]] + "?autoplay=1&mute=1&enablejsapi=1";
    option1.appendChild(image1);
    option2.appendChild(image2);
}