<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Calculations Table</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
 <?php
    
    // Open csv file, create empty array for data and get csv headers
    $file = fopen("calculations.csv", "r");
    $csvArray = array();
    $header = fgetcsv($file);

    // Loop through csv file and create associative array with the headers as keys
    while ($row = fgetcsv($file)) {
        $csvArray[] = array_combine($header, $row);
    }

    // Sort array based on 'Timestamp' column
    $time = array();
    foreach($csvArray as $key => $row) {
        $time[$key] = $row['Timestamp'];
    }
    array_multisort($time, SORT_DESC, $csvArray);

    // Create HTML table
    echo "<table><tr>";

    // Add CSV headers as table headers
    foreach($header as $cell) {
        echo "<th>" . htmlspecialchars($cell) . "</th>";
    }
    echo "</tr>";

    // Loop through data array and add each element as a row in the table
    foreach($csvArray as $arr) {
        echo "<tr>";
        foreach($arr as $key => $value) {
            echo "<td>" . htmlspecialchars($value) . "</td>";
        }
        echo "</tr>";
    }

    echo "</table>";
    ?>
    </body>
</html>