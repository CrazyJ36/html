<?php
    if (isset($_POST['email']) && $_POST['email'] > 0 && preg_match("/[@]/", $_POST['email'])) {
        file_put_contents('emails.txt', $_POST['email']. "\n", FILE_APPEND);
        // all echos get routed back to the results div as html data in post, due to js script by form.
        // except the alert scripts, as those aren't text data.
        $msg = "Thank you! ".$_POST['email']." has been added. If you\'d ever like to unsubscribe from the news, simply request this by replying to any email from CrazyJ36.";
        // maybe the only way to access php variable inside javascript that's already in php.
        echo "<script>var php_var = '$msg'; alert(php_var);</script>";
        echo "You signed up with: <br>". $_POST['email']."<br/>";
    } else {
        echo "<script>alert('Please enter an email address in the email field.')</script>";
    } 
    return;
?>