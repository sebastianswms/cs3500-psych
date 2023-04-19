var index = 0; // Stores how many choices the user has been presented with.
var data;
var confirmed = 0;

/*
    Input: The user choosing to confirm a video.

    Output: The confirmed video being added to the database.

    Remarks: After the user has confirmed 10 videos, they will be navigated back to the main page.
*/
window.confirmOption = function confirmOption(){

    let type = $("#target-ytsearch").html();
    let url = data['items'][index]['id']['videoId'];

    $.post( "/php/insert.php" , { type: type, url: url });

    index++
    confirmed++;

    // Move back to the main page once 10 entries are confirmed.
    if(confirmed >= 10){
        window.location.href = "./index.php";
    }

    resetPlayer();
}

/*
    Input: The user choosing to reject a video.

    Output: The next video from the YouTube API call being shown to the user.

    Remarks: This will reset the iframe used to show the user the video, taking the next video from the YouTube API response.
*/
window.rejectOption = function rejectOption(){
    index++
    resetPlayer();
}

/*
    Input: None.

    Output: The iframe showing the user a video being emptied, then the player being filled again with fillPlayer().

    Remarks: Selects based on ID: #player to find what to empty.
*/
window.resetPlayer = function resetPlayer(){
    $("#player").empty()
    fillPlayer();
}

/*
    Input: An index value and a data array to look through.

    Output: The video player being filled with a new iframe for the next video the user is reviewing.

    Remarks: data is an associative array deconstructed from a YouTube API JSON response, and should be processed accordingly.
*/
window.fillPlayer = function fillPlayer(){

    var ytcode = data['items'][index]['id']['videoId'];

    // Create an iframes to hold a YouTube embed.
    let iframe = $("<iframe></iframe>").attr({
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/" + ytcode + "?autoplay=1&disablekb=1",
        allow: "autoplay"
    })

    $("#player").append(iframe);
}

// When the page loads, initialize listeners for the reject and confirm buttons, then fill the video player.
$(document).ready(function(){
    let response = $("#target-response").html();
    data = JSON.parse(response);

    $("#reject").click(function(){rejectOption()});
    $("#confirm").click(function(){confirmOption()});

    fillPlayer();
})