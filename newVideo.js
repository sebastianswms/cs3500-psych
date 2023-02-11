function validateNewVideo(){
    let video_url = document.forms["newVideo"]["video_url"].value;
    if (video_url == ""){
    alert("Please enter a YouTube URL")
    return false;
    }
    let url_pattern = /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/i // Source: https://stackoverflow.com/q/19377262
    if (!video_url.match(url_pattern)) {
        alert("Invalid URL");
        return false;
    }
}