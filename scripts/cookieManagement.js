// Take a string that references a cookie JSON object and return an array that's the result of getting the cookie and parsing the JSON object.
function cookieParse(cookie){
    let unparsed = getCookie(cookie);
    return JSON.parse(unparsed == "" ? "[]" : unparsed); // Ternary operator: if the cookie is empty, parse an empty array; otherwise parse normally.
}

// Source: https://www.w3schools.com/js/js_cookies.asp (comments are mine)
function setCookie(cname, cvalue, exdays) {
  const d = new Date(); // Define a new constant to store the current date.
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); // Convert days to milliseconds.
  let expires = "expires="+d.toUTCString(); // Create the full expiry string.
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // Combine everything together and store the cookie.
}

// Source: https://www.w3schools.com/js/js_cookies.asp (comments are mine)
function getCookie(cname) {
  let name = cname + "="; // Add an equal-sign to the parameter-provided cookie name.
  let ca = document.cookie.split(';'); // Get the user's cookies and split the result on each semicolon.
  for(let i = 0; i < ca.length; i++) { // Iterate through the cookie array.
    let c = ca[i]; // Get the value of each cookie.
    while (c.charAt(0) == ' ') { // Remove whitespace.
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) { // If the parameter-provided cookie exists, return it.
      return c.substring(name.length, c.length);
    }
  }
  return ""; // If all else fails, return a blank string.
}

export {cookieParse, setCookie, getCookie}; // Export functionality for reading and writing cookies.