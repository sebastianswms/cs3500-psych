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

    let titles = cookieParse("titles");
    titles.push(video_title);
    setCookie("titles",JSON.stringify(titles),5);

    let videos = cookieParse("videos")
    videos.push(video_url);
    setCookie("videos",JSON.stringify(videos),5);

    fillVideoList();
}

function fillVideoList() {
    let form = document.getElementById("startAssessment");
    form.innerHTML = "";

    let titles = cookieParse("titles");

    for (var index in titles) {
        let title = titles[index];
        let box = document.createElement("input");
        box.type = "checkbox";
        box.id = "video" + index;
        box.name = "video" + index;
        box.value = title;

        let label = document.createElement("label");
        label.htmlFor = "video" + index;
        label.innerHTML = title;

        form.appendChild(box);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
    }
}

function cookieParse(cookie){
    let unparsed = getCookie(cookie);
        if(unparsed == ""){
            unparsed = "[]";
        }
    return JSON.parse(unparsed);
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