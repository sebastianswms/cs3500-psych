var index = 0; // Stores how many choices the user has been presented with.
var data;

window.confirmOption = function confirmOption(){

    let type = $("#target-ytsearch").html();
    let url = data['items'][index]['id']['videoId'];

    $.post( "insert.php" , { type: type, url: url });

    index++
    resetPlayer();
}

window.rejectOption = function rejectOption(){
    index++
    resetPlayer();
}

window.resetPlayer = function resetPlayer(){
    $("#player").empty()
    fillPlayer();
}

window.fillPlayer = function fillPlayer(){

    var ytcode = data['items'][index]['id']['videoId'];

    console.log(ytcode)

    // Create an iframes to hold a YouTube embed.
    let iframe = $("<iframe></iframe>").attr({
        width: "560",
        height: "315",
        src: "https://www.youtube.com/embed/" + ytcode + "?autoplay=1&disablekb=1",
        allow: "autoplay"
    })

    $("#player").append(iframe);
}

// When the page loads, initialize the "buttons" for the user to select from.
$(document).ready(function(){
    let response = $("#target-response").html();
    data = JSON.parse(response);

    $("#reject").click(function(){rejectOption()});
    $("#confirm").click(function(){confirmOption()});

    fillPlayer();
})