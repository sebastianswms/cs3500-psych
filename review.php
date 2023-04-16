<!DOCTYPE html>
<html class="api">
<head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assessment</title>

    <!-- External stylesheets -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/styles.css">

    <!-- Import jquery from Google's CDN -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="scripts/reviewManagement.js" type="module"></script>
</head>

<body class="api">
<main class="container h-100 w-100">

    <!-- With assistance from https://stackoverflow.com/q/23740548 -->
    <div id="target-ytsearch" style="display:none;">
        <?php
            echo ($_GET["ytsearch"]);
        ?>
    </div>
    <div id="target-response" style="display:none;">
        <?php

        $curl = curl_init();

        $ytsearch = ($_GET["ytsearch"]);

        $query = array(
            'maxResults' => '25',
            'q' => $ytsearch,
            'key' => 'AIzaSyCcstjmRQbuQnf5vFL96MopUIE6hXJNW-c'
        );

        // The following code was generated from Postman.
        //---
        curl_setopt_array($curl, array(
          CURLOPT_URL => 'https://www.googleapis.com/youtube/v3/search?'.http_build_query($query),
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => '',
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 0,
          CURLOPT_FOLLOWLOCATION => true,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => 'GET',
        ));
        //---

        //$response = curl_exec($curl);

        $response = '{ "kind": "youtube#searchListResponse", "etag": "wNp4j4ns3fQYy3XvK3qSdNiaD4M", "nextPageToken": "CBkQAA", "regionCode": "CY", "pageInfo": { "totalResults": 1000000, "resultsPerPage": 25 }, "items": [ { "kind": "youtube#searchResult", "etag": "ImIW5wfWdD9X2Ee9WckIj5eOykI", "id": { "kind": "youtube#video", "videoId": "yn7ZnYW89A8" } }, { "kind": "youtube#searchResult", "etag": "BAyQonc9bvHWDGrjrKl8A3fH4PA", "id": { "kind": "youtube#video", "videoId": "AI61jK-apOs" } }, { "kind": "youtube#searchResult", "etag": "_oOVp0cMTU6dR-_RkpKs7unOJ8E", "id": { "kind": "youtube#video", "videoId": "ma67yOdMQfs" } }, { "kind": "youtube#searchResult", "etag": "mJq5VnymOiU4RJywME6Br6lMeaA", "id": { "kind": "youtube#video", "videoId": "E4R1Udz32sc" } }, { "kind": "youtube#searchResult", "etag": "qAmMtYhAKy82-8ta7JeLR56udVk", "id": { "kind": "youtube#video", "videoId": "tPX6TpQrzes" } }, { "kind": "youtube#searchResult", "etag": "rze3gVlaIzTTSLVVIPVb9B-dNi8", "id": { "kind": "youtube#video", "videoId": "eSWST13stO4" } }, { "kind": "youtube#searchResult", "etag": "cDvwgJjeRoc7nluvzor1YySVXGA", "id": { "kind": "youtube#video", "videoId": "pmlzdeZuAk8" } }, { "kind": "youtube#searchResult", "etag": "p8J7hXxFawzgydNKMgmcpBprcIY", "id": { "kind": "youtube#video", "videoId": "xtHZKToMvus" } }, { "kind": "youtube#searchResult", "etag": "wJmjbmW-AbfZ9QaulB2O2c7g-MQ", "id": { "kind": "youtube#video", "videoId": "b7Pl5Rr8ZYk" } }, { "kind": "youtube#searchResult", "etag": "jvul9L5gGChOowl2SAEGgD_PCHI", "id": { "kind": "youtube#video", "videoId": "vY91wUhR-fE" } }, { "kind": "youtube#searchResult", "etag": "OBARgCZb9QrJ59YWvvaKJ5A38Ts", "id": { "kind": "youtube#video", "videoId": "ALRoebu0Rgs" } }, { "kind": "youtube#searchResult", "etag": "Yf4-yQya8hnVBProMCQbyyhNg3Y", "id": { "kind": "youtube#video", "videoId": "zZqxPozl2Ec" } }, { "kind": "youtube#searchResult", "etag": "FLp9SeJJEJfxpUj1D0KAQm77txQ", "id": { "kind": "youtube#video", "videoId": "H17i_5-ebrc" } }, { "kind": "youtube#searchResult", "etag": "13-Oo0-kbn04JyaZHUVpLZ8OH58", "id": { "kind": "youtube#video", "videoId": "j1AQ_s-y52M" } }, { "kind": "youtube#searchResult", "etag": "xGl_hQrDgWMz-Ov1TCx7mxc6K4c", "id": { "kind": "youtube#video", "videoId": "yqnWM03VMy4" } }, { "kind": "youtube#searchResult", "etag": "JhhrvdtkFwJVOHToleyCEemSrHg", "id": { "kind": "youtube#video", "videoId": "wxBtwCZtDAg" } }, { "kind": "youtube#searchResult", "etag": "ytQXLj3ldSo7ZLVvTAcuXNdok2I", "id": { "kind": "youtube#video", "videoId": "OHaKUMtxGTU" } }, { "kind": "youtube#searchResult", "etag": "x3MIr1ZeEx0LbocMaCj4OVayF_w", "id": { "kind": "youtube#video", "videoId": "EYVON-3-iI0" } }, { "kind": "youtube#searchResult", "etag": "WVPWIy97_t_nk7kqfg8L3XzQuNs", "id": { "kind": "youtube#video", "videoId": "axu-v6ZBViQ" } }, { "kind": "youtube#searchResult", "etag": "25DRP7NWGmhKU4LtVC2oq1tPbfg", "id": { "kind": "youtube#video", "videoId": "WUk5hg0mlQU" } }, { "kind": "youtube#searchResult", "etag": "QVMrsyiBgCn8wPmNEdk1O-U0o3s", "id": { "kind": "youtube#video", "videoId": "0nS9m_3qQXM" } }, { "kind": "youtube#searchResult", "etag": "tqn0DBsTHaiAngtZamUwz3MmTN4", "id": { "kind": "youtube#video", "videoId": "2KLIr0_fips" } }, { "kind": "youtube#searchResult", "etag": "MINzofffU0s4whxfEklqBx4BdLE", "id": { "kind": "youtube#video", "videoId": "ul4OVcbULIA" } }, { "kind": "youtube#searchResult", "etag": "p_ahQL5kgWZ7H9xwHq3vas6X6eU", "id": { "kind": "youtube#video", "videoId": "z5bLZtf37nI" } }, { "kind": "youtube#searchResult", "etag": "k1Eq0krrNzIR-HHykAOBGn5UMCk", "id": { "kind": "youtube#video", "videoId": "WCRQ4Ehtz50" } } ] }';
        echo $response;

        curl_close($curl);
        ?>
    </div>

    </div>
    <div>
        <div id="player"></div>
    </div>
    <div>
        <input type="button" value="Reject" id="reject" class="btn btn-success text-light border-dark both-btn">
        <input type="button" value="Confirm" id = "confirm" class="btn btn-success text-light border-dark both-btn">
    </div>
</main>

</body>
</html>




