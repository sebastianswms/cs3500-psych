<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport for the page to fit into screen & not scrollable by x-axis-->
   <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>References</title> <!-- For display in tabs and bookmarks. -->

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
</head>

<body class="main-pages">

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

<header>
    <h1>References</h1>
</header>

<main id="references">

    <!-- A blurb describing the references page. Introduces the purpose of the page and spells out how the page is laid out. -->
    <div class="row pt-4">
        <p class="indent">
            Welcome to the References page for Team Psych's website. This is a selection of references that were used
            in the construction of our website. Each contributor has their own set of citations detailing the resources
            they used and where on the website those resources were relevant.
        </p>
    </div>

    <!-- The first row of references. -->
    <div class="row pt-4 ref-section">

        <!-- The top left set of references. -->
        <div class="col pt-6">
            <div class="foreground-box" id="reference-box">
                <h2>Sebastian Smiley</h2>
                <ul>
                    <li>
                        <b>Setting and reading user cookies (cookieManagement.js):</b> W3Schools, “JavaScript Cookies,” www.w3schools.com, 2023. [Online]. Available: https://www.w3schools.com/js/js_cookies.asp [Accessed: Mar. 19, 2023]
                    </li>
                    <li>
                        <b>RegEx for checking that a URL is from youtube.com or youtu.be (addDeleteVideo.js):</b> B. Barker, “Regex for youtube URL,” Stack Overflow, Nov. 18, 2021. [Online]. Available: https://stackoverflow.com/q/19377262. [Accessed: Mar. 19, 2023]
                    </li>
                    <li>
                        <b>A small (<1 line) snippet showing how to call the generateRandomCombinations() function (startAssessment.js):</b> N. Ruotsalainen, “javascript - How to create an array containing 1...N,” Stack Overflow, Feb. 09, 2022. [Online]. Available: https://stackoverflow.com/q/3746725. [Accessed: Mar. 19, 2023]
                    </li>
                    <li>
                        <b>An explanation of how to pass a variable from PHP to JavaScript. (review.php):</b> M. Uchiha, “How do I pass variables and data from PHP to JavaScript?,” Stack Overflow, Sep. 03, 2021. [Online]. Available: https://stackoverflow.com/q/23740548. [Accessed: Apr. 19, 2023]
                    </li>
                    <li>
                        <b>Valuable information on common snags that come when attempting to call an API from PHP. (api.php):</b> Michiel, “Call a REST API in PHP,” Stack Overflow, Feb. 25, 2022. [Online]. Available: https://stackoverflow.com/questions/9802788. [Accessed: Apr. 19, 2023]
                    </li>
                    <li>
                        <b>An explanation of the YouTube API direct from Google itself. (api.php):</b> “Search | YouTube Data API,” Google Developers, Nov. 04, 2022. [Online]. Available: https://developers.google.com/youtube/v3/docs/search. [Accessed: Apr. 19, 2023]
                    </li>
                </ul>
            </div>
        </div>

        <!-- The top right set of references. -->
        <div class="col pt-6">
            <div class="foreground-box" id="reference-box">
                <h2>Camilla Vincent</h2>
                <ul>
                    <li>
                        <b>Background image generated by OpenAI's Dall-E model (background.png):</b>R. J. Gansner, E. R. Gartland, J. D. North, and K.-P. Vo, "Dall-E: Creating Images from Text," OpenAI Blog, Jan. 5, 2021. [Online]. https://openai.com/blog/dall-e/. [Accessed: Mar. 21, 2023].
                    </li>
                    <li>
                        <b>A guide to web design principles (for all pages):</b>V. Montecino, “Web Design Principles Checklist,” Web design principles. [Online]. Available: https://mason.gmu.edu/~montecin/webdesign.htm. [Accessed: 20-Mar-2023]. 
                    </li>
                    <li>
                        <b>Bootstrap navigation bar tutorial with dropdown toggling (index.php, about.php, references.php, api.php, decision.php)</b>Navbar Bootstrap 5 | Bootstrap Navbar Tutorial. YouTube, 2021. Available: https://www.youtube.com/watch?v=qNifU_aQRio [Accessed: 20-Mar-2023]. 
                    </li>
                    <li>
                        <b>Code template for responsive flexbox layout (about.php, references.php)</b>“W3Schools online HTML editor,” Tryit Editor. [Online]. Available: https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_responsive2. [Accessed: 2-Apr-2023]. 

                    </li>
                    <li>
                        <b>Image used to create the favicon and website logo (all pages)</b>Greek Uc Psi. Wikipedia, 5 Oct. 2014, https://en.wiktionary.org/wiki/%CE%A8#/media/File:Greek_uc_psi.svg. [Accessed 27 Apr. 2023]. 
                    </li>
                </ul>
            </div>
        </div>

        <!-- The bottom left set of references. -->
        <div class="col pt-6">
            <div class="foreground-box" id="reference-box">
                <h2>Cody Thornell</h2>
                <ul>
                    <li>
                        <b>Implementing html modal and adding functionality (assessment.html):</b> “How to - CSS/JS modal,” How To Make a Modal Box With CSS and JavaScript. [Online]. Available: https://www.w3schools.com/howto/howto_css_modals.asp. [Accessed: 14-Feb-2023]. 
                    </li>
                    <li>
                        <b>Getting a random number when generating the combinations (orderManagement.js):</b> JavaScript math object. [Online]. Available: https://www.w3schools.com/js/js_math.asp. [Accessed: 15-Feb-2023]. 
                    </li>
                    <li>
                        <b>Handling the array when generating the combinations (orderManagement.js):</b> JavaScript array methods. [Online]. Available: https://www.w3schools.com/js/js_array_methods.asp. [Accessed: 15-Feb-2023]. 
                    </li>
                    <li>
                        <b>Setting epoch timestamps (startAssessment.js):</b> “Javascript date gettime(),” JavaScript Date getTime() Method. [Online]. Available: https://www.w3schools.com/jsref/jsref_gettime.asp. [Accessed: 19-Mar-2023]. 
                    </li>
                    <li>
                        <b>Parsing ints from cookies (buttonManagement.js):</b> “Javascript parseInt(),” JavaScript parseInt() Method. [Online]. Available: https://www.w3schools.com/jsref/jsref_parseint.asp. [Accessed: 20-Mar-2023]. 
                    </li>
                    <li>
                        <b>Checking jQuery empty selector (buttonManagement.js):</b> J. S. F.- js.foundation, “:empty selector,” :empty Selector | jQuery API Documentation. [Online]. Available: https://api.jquery.com/empty-selector/. [Accessed: 18-Apr-2023]. 
                    </li>
                </ul>
            </div>
        </div>

        <!-- The bottom right set of references. -->
        <div class="col pt-6">
            <div class="foreground-box" id="reference-box">
                <h2>Ali Azimi</h2>
                <ul>
                    <li>
                        <b>Download Button for Graph (results.php, graphBuilder.js):</b> YouTube, “How to Download Canvas as Image,” www.youtube.com, 2022. [Online]. Available: https://www.youtube.com/watch?v=jlgeG5K6bBg [Accessed: Feb. 16, 2023]
                    </li>
                    <li>
                        <b>Chart.js library link for graph (results.php):</b> chartjs, “chart.js library,” www.chartjs.org, 2023. [Online]. Available: https://www.chartjs.org/docs/latest/getting-started/ [Accessed: Feb. 27, 2023]
                    </li>
                    <li>
                        <b>CSS Buttons Styling (index.php, decision.php, results.php):</b> W3Schools, “CSS Buttons,” www.w3schools.com, 2023. [Online]. Available: https://www.w3schools.com/css/css3_buttons.asp [Accessed: March. 15, 2023]
                    </li>
                    <li>
                        <b>Y-axis, X-axis Grid Lines Remover (results.php, graphBuilder.js):</b> chart.js, “Bar Chart,” www.chartjs.org, 2023. [Online]. Available: https://www.chartjs.org/docs/latest/charts/bar.html [Accessed: Mar. 18, 2023]
                    </li>
                    <li>
                        <b>Added loader for all pages (index.php, asssessment.php, decision.php, results.php, loader.js):</b> W3schools, “CSS Loader,” www.w3schools.com, 2023. [Online]. Available: https://www.w3schools.com/howto/howto_css_loader.asp [Accessed: Mar. 21, 2023]
                    </li>
                    <li>
                        <b>Y-axis, X-axis Labels (results.php):</b> stackoverflow, “In Chart.js set chart title, name of x axis and y axis,” www.stackoverflow.com, 2023. [Online]. Available: https://stackoverflow.com/questions/27910719/in-chart-js-set-chart-title-name-of-x-axis-and-y-axis [Accessed: April. 02, 2023]
                    </li>
                </ul>
            </div>
        </div>
    </div>
</main>

<footer>
    <p><em>A website for Dr. Curiel.</em></p>
</footer>

</body>
</html>
