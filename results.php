<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport for the page to fit into screen & not scrollable by x-axis-->
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>Assessment Results</title>

    <!-- icon library link w3c -->
    <!-- Add icon library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

     <!-- loader file js link -->
     <script src="/scripts/loader.js"></script>

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <script src="scripts/tableBuilder.js" type="module"></script> <!-- Create the table of results from the assessment. -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script> <!-- Import the Chart.js library -->
    <script src="scripts/graphBuilder.js" type="module"></script> <!-- Create the chart using data from cookies -->
    <script src="scripts/statBuilder.js" type="module"></script> <!-- Fill out the advanced stats section -->

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">

</head>
<style>
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
</style>

<!-- When the page loads, fill the table and stats from the results of the assessment. -->
<body class="results" onload="fillTable();fillStats();">

    <nav id="navbar" class="navbar navbar-expand-sm navbar-dark">
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
</nav>

    <!-- loading div -->
    <div class="loader"></div>
    
    <!-- Jumbotron at the top of the page announcing completion of the assessment to the user. -->
    <section id="first-sec">
        <div class="jumbotron-title" id="graph-res-title">
            <h1>Assessment Results</h1>
            <hr>
        </div>
    </section>
    
    <section>
        <div class="row">
            <div id="col1" class="res-sec duration">
                <!-- Filled using tableBuilder.js with data from the user's cookies. -->
                <div class="centered">
                    <h2>Percentage of Selection</h2>
                </div>
    
                <table class="video-table" id="video-table"></table>
    
                <div class="centered">
                    <h2>Percentage of Selection (location)</h2>
                </div>
                <label id="option1-result"></label>
                <label id="option2-result"></label>
                <br>
                <div class="centered">
                    <h2>Duration of Assessment</h2>
                </div>
                <label id="duration-result"></label>
            </div>

            <!-- For styling the container of the chart -->
            <div id="col2">
                <div  id="chart-div" class="graph-sec">
                    <h3 class="graph-text title-text"></h3>
                    <!-- A link from canvas which will be populated using Chart.js -->
                    <canvas id="myChart"></canvas>
                </div>
                <!-- brought the btn div inside the div which is for chart -->
                <div class="btn-div">
                    <!-- Restart the test from the beginning. -->
                    <a href="index.php">
                        <!-- added bootstrap btn styling -->
                        <button id="btn-size" class="b-main btn btn-dark" type="button">Home Page <i class='fa fa-refresh' id="dnld"></i></button>
                    </a>
            
                    <!-- Download the graph as a PNG. -->
                    <!-- added bootstrap btn styling -->
                    <button id="btn-size" class="btn btn-success" onclick="downloadChart()"> Download PNG <i class="fa fa-download" id="dnld"></i></button>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p><em>A website for Dr. Curiel.</em></p>
    </footer>
    
    </body>
</html>
