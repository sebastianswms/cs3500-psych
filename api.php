<!DOCTYPE html>
<html class="api">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API</title>

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">

</head>

<body class="api">
<nav class="navbar navbar-expand-lg navbar-dark">
    <ul class="navbar-nav mr-auto">
        <li class="nav-logo">
            <a href="index.html">
              <img src="/images/logo.png" width="100" height="100" alt="Logo">
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
        </li> 
        <li class="nav-item">
            <a class="nav-link" href="about.php">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="catalog.php">Catalog</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="references.php">References</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="api.php">Video Search API</a>
        </li>
    </ul>
</nav>
<main class="container h-100 w-100">
    <div class="row h-100 justify-content-center align-items-center">
        <form action="/php/review.php" class="col-12">
            <label for="ytsearch">Search YouTube:</label>
            <input type="search" id="ytsearch" name="ytsearch" pattern=".{1,100}" required title="Up to 100 characters.">
            <input type="submit" value="Search" class="btn btn-success text-light border-dark both-btn">
        </form>
    </div>
</main>

<footer>
    <p><em>A website for Dr. Curiel.</em></p>
</footer>

</body>
</html>
