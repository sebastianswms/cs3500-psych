<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assessment Completetion</title>
    <!-- viewport for the page to fit into screen & not scrollable by x-axis-->
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <!-- loader file js link -->
    <script src="/scripts/loader.js"></script>

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">
</head>

<body class="decision">
    <!-- loading div -->
    <div class="loader"></div>

    <!-- Jumbotron at the top of the page announcing completion of the assessment to the user. -->
    <div class="jumbotron-title" id="res-title">
        <h1>Assessment Completed!</h1>
    </div>

    <!-- A div for styling the surroundings of the "see results" button. -->
    <div class="decision-buttons">
        <a href="results.php">
            <button class="btn btn-success btn-result">SEE RESULTS&nbsp&nbsp>></button>
        </a>
    </div>

    <!-- A div for styling the surroundings of the "start over" button. -->
    <div class="decision-buttons">
        <a href="index.php">
            <button class="btn btn-over btn-primary">&nbspSTART OVER&nbsp&nbsp&nbsp&#x21B7</button>
        </a>
    </div>

<footer>
    <p><em>A website for Dr. Curiel.</em></p>
</footer>

</body>
</html>

