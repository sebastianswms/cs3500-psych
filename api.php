<!DOCTYPE html>
<html class="api">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- viewport for the page to fit into screen & not scrollable by x-axis-->
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <title>API</title>

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.png">

</head>

<body class="api">
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
</nav>

<main class="search-box">
    <div >
        <form action="review.php" class="col-12" id="api-search-form">
            <label for="ytsearch" id="search-youtube" >Search YouTube:</label>
            <input type="search" id="ytsearch" name="ytsearch" pattern=".{1,100}" required title="Up to 100 characters.">
            <input type="submit" id="api-search-btn"value="Search" class="btn btn-success">
        </form>
    </div>
</main>

<footer class="footer">
    <p><em>A website for Dr. Curiel.</em></p>
</footer>

</body>
</html>
