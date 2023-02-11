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

function storeNewVideo(){
    let video_title = document.forms["newVideo"]["video_title"].value;
    let video_url = document.forms["newVideo"]["video_url"].value;

    unparsed_titles = getCookie("titles");
    if(unparsed_titles == ""){
        unparsed_titles = "[]"
    }

    let titles = JSON.parse(unparsed_titles);
    titles.push(video_title);
    setCookie("titles",JSON.stringify(titles),5);

    unparsed_videos = getCookie("videos");
    if(unparsed_videos == ""){
        unparsed_videos = "[]"
    }

    let videos = JSON.parse(unparsed_videos);
    videos.push(video_url);
    setCookie("videos",JSON.stringify(videos),5);
}

function setCookie(cname, cvalue, exdays) { // Source: https://www.w3schools.com/js/js_cookies.asp
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) { // Source: https://www.w3schools.com/js/js_cookies.asp
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}