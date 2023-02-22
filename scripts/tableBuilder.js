/*
Author: Sebastian Smiley
Class: CS3500
Date: Spring 2023
*/

import {cookieParse} from './cookieManagement.js';

// Fill a table based on the user's selected options.
window.fillTable = function fillTable() {

    let table = document.getElementById("video-table"); // Find the correct HTML element to modify.
    let selection = cookieParse("selection"); // Get all selected videos.
    let titles = cookieParse("titles"); // Get titles for all videos.
    let options = cookieParse("option"); // Get counts for how many times each option has been chosen.
    let label = [];
    let percents = [];
    let total = options.reduce((i,j) => i+j, 0) // The total number of selections for all options.
    selection.forEach(element => label.push(titles[element])); // Put each selected title into a new array.
    options.forEach(element => percents.push(element*100/total)); // Put each percentage into a new array.

    table.innerHTML = "";

    for (var i = 0; i < selection.length; i++) {

        let title = titles[i];
        let percent = percents[i];

        let row = document.createElement("tr");
        let cell1 = document.createElement("td");
        let cell2 = document.createElement("td");

        cell1.innerHTML = title;
        cell2.innerHTML = percent + "%";

        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }
}