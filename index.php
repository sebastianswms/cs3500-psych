<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport for the page to fit into screen & not scrollable by x-axis-->
    <meta name="viewport" content="width=device-width, user-scalable=no">

    <title>Paired Preference</title> <!-- For display in tabs and bookmarks. -->

    <!-- box icon link -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!-- Import jquery from Google's CDN -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <!-- icon library link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- loader file js link -->
    <script src="/scripts/loader.js"></script>

    <script src="/scripts/addDeleteVideo.js" type="module"></script> <!-- Storing new videos from the user -->
    <script src="/scripts/videoList.js" type="module"></script> <!-- Generating a list of video checkboxes from cookies -->
    <script src="/scripts/startAssessment.js" type="module"></script> <!-- Verification and starting the assessment -->
    <script src="/scripts/instructionsDropdown.js" type="module"></script> <!-- Verification and starting the assessment -->

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
    

</head>

<body onload="fillVideoList()" class="main-pages"> <!-- When the page loads, populate the list of video checkboxes -->
<div class="loader"></div>

<nav class="navbar navbar-expand-sm navbar-dark">
    <a
        href="index.php"
        class="nav-logo mb-0">
          <img src="/images/logo.png"
          width="100" height="100" />
    </a>
    <button
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    class="navbar-toggler"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" id="item1">
           <a class="nav-link" href="index.php"
           >Home</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="about.php"
           >About</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="references.php">References</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="api.php">Video Search API</a>
        </li>
      </ul>
</div></nav>

<header class="page-header">
    <h1>Paired Stimulus Preference Assessment Tool</h1>
</header>

<main id="index">
    <div class="row pt-4">
        <!-- Instructions -->
        <div class="col-sm-8">
            <section class="indent">
                <p><b>Welcome!</b> This website is a tool designed for researchers and educators to assess the favorite rewards
                of autistic children and adults. Using a series of video trials, subjects will be able to choose their preferred rewards
                without relying on verbal communication.
                </p>
                <!-- by clicking, the user can display/hide the instruction steps -->
                <h2 class="inst-text" onclick="toggleInstructionsDropdown()">Instructions <i id="inst-icon" class='bx bx-chevron-down-circle up-icon'></i></h2>
                <div id="instructions-box" class="foreground-box">
                    <ol>
                        <li>Add your videos by entering their YouTube URLs below (20 video maximum).</li>
                        <li>Set the timer (3 - 90 seconds).</li>
                        <li>Select video orientation (Vertical/Horizontal).</li>
                        <li>Select the trial presentation as either thumbnails or the video player.</li>
                        <li>Select the videos you want to include in the test from the video bank. Then press "Start Test."</li>
                    </ol>
                    <p><b>After the test concludes, you can download the results!</b></p>
                </div>
            </section>
            <div id="par_stim" class="row pt-3">
                <!-- Add New Videos -->
                <div class="col-sm-4" id="new-video-box">
                    <h2>Add New Stimulus</h2>
                    <form id="new-video" action="javascript:storeNewVideo();" onsubmit="return validateNewVideo()" method="post">
                        <label>Title:</label><input type="text" name="video-title" size="30" maxlength="15" placeholder="Video title....">
                        <br><br>
                        <!-- YouTube URL. Has placeholder text to inform user of correct format. -->
                        <label>URL:</label><input type="text" name="video-url" size="30" placeholder="https://www.youtube.com/watch?v=??????">
                        <br><br>
                        <input type="submit" value="Add Stimulus" class="btn btn-dark text-light border-dark">
                    </form>
                </div>
                <!-- Parameters -->
                <div class="col-sm-4" id="parameters">
                    <h2>Assessment Parameters</h2>
                    <label>Time to Selection (seconds):</label> <!-- 1st Parameter (number range) -->
                    <input type="number" min="3" max="90" name="time-to-selection" size="13" value="15" form="start-assessment"/>
                    <br><br>
                    <label>Playtime for Selections (seconds):</label> <!-- 2nd Parameter (number range) -->
                    <input type="number" min="3" max="90" name="playtime" size="13" value="15" form="start-assessment"/>
                    <br><br>
                    <label>Location of Stimuli:</label>
                    <select name="video-location" form="start-assessment"> <!-- 3rd Parameter (dropdown) -->
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical">Vertical</option>
                    </select>
                    <br><br>
                    <label>Stimulus Option Displays:</label><select name="video-presentation" form="start-assessment"> <!-- 4th Parameter (dropdown) -->
                    <option value="video">Video Playback</option>
                    <option value="still">Still Images</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- Video Bank -->
        <div id="vid-bnk" class="col-sm-4">
            <div class="foreground-box">
                <section id="video-bank">
                    <h2 class="vid_bnk_title">Stimulus Library</h2>
                    <!-- An empty form that is populated using videoList.js -->
                    <form id="start-assessment" action="javascript:startAssessment();" onsubmit="return validateStartAssessment()" method="post"></form>
                </section>
                <section id="start-button">
                    <input type="submit" form="start-assessment" value="Start Test" class="btn btn-success text-light border-dark both-btn">
                    <!-- added a button for user to remove the video(s)-->
                    <button class="btn btn-danger text-light border-dark both-btn" onclick="removeVideos()">Delete <i class="fa fa-trash"></i></button>
                </section>
            </div>
        </div>
    </div>
</main>
<footer>
    <p><em>A website for Dr. Curiel.</em></p>
</footer>

</body>
</html>
