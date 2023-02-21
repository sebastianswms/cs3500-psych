/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

import {cookieParse} from './cookieManagement.js';

window.fillButtons = function fillButtons(){

    const index = 0;

    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");

    option1.innerHTML = "";
    option2.innerHTML = "";

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");

    console.log("ID FRAGMENT: " + cookieParse("videos")[cookieParse("selection")[index][0]]);
    image1.src = "https://i.ytimg.com/vi/" + cookieParse("videos")[cookieParse("selection")[index][0]] + "/maxresdefault.jpg";
    image2.src = "https://i.ytimg.com/vi/" + cookieParse("videos")[cookieParse("selection")[index][1]] + "/maxresdefault.jpg";

    option1.appendChild(image1);
    option2.appendChild(image2);
}