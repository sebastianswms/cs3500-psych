/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

import {cookieParse, getCookie, setCookie} from './cookieManagement.js';

var idleTimeout;
var index = 0;
console.log(getCookie("timeout"));
var timeoutLength = getCookie("timeout")*1000;

window.selectOption1 = function selectOption1(){
    let option = cookieParse("option");
    option[cookieParse("combination")[index][0]]++;
    setCookie("option",JSON.stringify(option),5); // 5 days until expiry.
    resetButtons();
}

window.selectOption2 = function selectOption2(){
    let option = cookieParse("option");
    option[cookieParse("combination")[index][1]]++;
    setCookie("option",JSON.stringify(option),5); // 5 days until expiry.
    resetButtons();
}

window.initializeButtons = function initializeButtons(){
    fillButtons();
    idleTimeout = setTimeout(resetButtons,timeoutLength);
}

window.resetButtons = function resetButtons(){
    clearTimeout(idleTimeout);
    index++;
    fillButtons();
    idleTimeout = setTimeout(resetButtons,timeoutLength);
}

window.fillButtons = function fillButtons(){

    let combination = cookieParse("combination");
    let selection = cookieParse("selection");
    let videos = cookieParse("videos");

    if(index >= combination.length){
        window.location.href = "./decision.html";
        return;
    }

    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");

    option1.innerHTML = "";
    option2.innerHTML = "";

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");

    image1.src = "https://i.ytimg.com/vi/" + videos[selection[combination[index][0]]] + "/maxresdefault.jpg";
    image2.src = "https://i.ytimg.com/vi/" + videos[selection[combination[index][1]]] + "/maxresdefault.jpg";
// "https://www.youtube.com/embed/" + cookieParse("videos")[cookieParse("selection")[cookieParse("combination")[index][0]]] + "?autoplay=1&mute=1&enablejsapi=1";
    option1.appendChild(image1);
    option2.appendChild(image2);
}