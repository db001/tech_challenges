<?php

    // Get data from request
    $calc = $_GET['calc'];
    // Add addition signs that have been stripped out of request
    $calc = str_replace(' ', '+', $calc);
    $ip = $_SERVER['REMOTE_ADDR'];
    $timestamp = date('Y-m-d H:i:s');
    $browser = $_SERVER['HTTP_USER_AGENT'];

    // Check if file exists, if not create it and add headers
    if(!file_exists('calculations.csv')) {
        $file = fopen('calculations.csv', 'a');
        fputcsv($file, array('Sum', 'IP', 'Timestamp', 'Browser'));
    } else {
        // Open the file
        $file = fopen('calculations.csv', 'a');
    }
        
    // Put data into array
    $data = array(
        $calc, $ip, $timestamp, $browser
    );
    
    // Save data to file
    fputcsv($file, $data);
    
    // Close file
    fclose($file);
?>