// Get the "videos" cookie value
const cookies = document.cookie;
const cookiesArray = cookies.split("; ");
let videosValue = null;
for (let i = 0; i < cookiesArray.length; i++) {
  const [cookieName, cookieValue] = cookiesArray[i].split("=");
  if (cookieName === "videos") {
    videosValue = cookieValue;
    break;
  }
}

// Parse the "videos" cookie value and assign to outputs
let firstOutput = null;
let secondOutput = null;
if (videosValue) {
  const videosArray = JSON.parse(videosValue);
  firstOutput = videosArray[0];
  secondOutput = videosArray[1];
  
}

// edit URLs to embedded, muted, and auto-played. Replace "watch?v=" with "embed/" and add "?autoplay=1&mute=1&enablejsapi=1" to the end.
let newUrl1 = firstOutput.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&enablejsapi=1'; 
let newUrl2 = secondOutput.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&enablejsapi=1';

export { newUrl1, newUrl2 };


//To-do:
// some URLs are formatted as https://youtu.be/eYyIDTMmmsM. 
// Need to convert these URLs into this one ->  https://www.youtube.com/watch?v=eYyIDTMmmsM then add autoplay and embed. 
// also should look into other URL formats to make sure all of them work. Such as URLs from playlists.


