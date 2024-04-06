<?php 
    $my_variable = "Variable residing on server successfully shown in browser"; // isolated variable in php.
    $client_text_field = $_POST['client_text_field']; // get client(browser) text field in php.
    $server_var = $client_text_field . "\n" . $my_variable;  // add server variable to browser client text field.
    echo $server_var; // show server code in browser.
?> 