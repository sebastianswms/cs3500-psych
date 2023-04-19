<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title> <!-- For display in tabs and bookmarks. -->

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
</head>

<body>
    <!-- navbar (code is based on a tutorial listed in references) -->
<nav class="navbar navbar-expand-sm navbar-dark">
        <a
            href="index.html"
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
               <a class="nav-link" href="index.html"
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
</nav>

<header>
    <h1>About</h1>
</header>

<main id="about">

    <!-- A blurb describing the about page. Includes Team "number" and a description of the project. -->
    <div class="row pt-4">
        <p class="indent">
            Welcome to the About page for Team Psych's website. This website is a tool designed for researchers and educators to assess
            the favorite rewards of autistic children. Using a series of video trials, subjects will be able to choose
            their preferred rewards without relying on verbal communication.
        </p>
    </div>

    <!-- Button that leads to the home page. -->
    <div class="btn-container">
        <a href="index.html">
            <button id="test-button">Take Me To The Test</button>
        </a>
    </div>

    <!-- The first row of about-page entries -->
    <div class="row pt-4">

        <!-- The top left about-page entry. -->
        <div class="col pt-6">
            <div class="foreground-box">
                <h2>Sebastian Smiley</h2>
                <p class="indent">
                    I'm one of the designers of this website. I'm a computer science and data science double-major, and
                    have worked heavily on the JavaScript portion of this website's implementation.
                </p>
            </div>
        </div>

        <!-- The top right about-page entry. -->
        <div class="col pt-6">
            <div class="foreground-box">
                <h2>Camilla Vincent</h2>
                <p class="indent">
                    Voluptatem ducimus et eum eos. Est vel omnis nostrum voluptates quibusdam quisquam velit consequuntur. Cupiditate velit nisi est voluptate et praesentium sed quaerat.
                </p>
            </div>
        </div>

    </div>

    <!-- The second row of about-page entries -->
    <div class="row pt-4">

        <!-- The bottom left about-page entry. -->
        <div class="col pt-6">
            <div class="foreground-box">
                <h2>Cody Thornell</h2>
                <p class="indent">
                    Voluptatem ducimus et eum eos. Est vel omnis nostrum voluptates quibusdam quisquam velit consequuntur. Cupiditate velit nisi est voluptate et praesentium sed quaerat.
                </p>
            </div>
        </div>

        <!-- The bottom right about-page entry. -->
        <div class="col pt-6">
            <div class="foreground-box">
                <h2>Ali Azimi</h2>
                <p class="indent">
                    Voluptatem ducimus et eum eos. Est vel omnis nostrum voluptates quibusdam quisquam velit consequuntur. Cupiditate velit nisi est voluptate et praesentium sed quaerat.
                </p>
            </div>
        </div>

    </div>
</main>

<footer>
    <p><em>A website for Dr. Curiel.</em></p>
</footer>

</body>
</html>
