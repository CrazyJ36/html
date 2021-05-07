<?php
    $email_data = $_POST['email_value'];
    if (isset($email_data) && preg_match("/[@]/", $email_data)) {
        file_put_contents('emails.txt', $email_data . "\n", FILE_APPEND);
        // all echos get routed back to the email-label id as html data in this post execution, says to in js script for form.
        // except the alert scripts, as those aren't text data.
        $msg = "Thank you! ". $email_data ." has been added. If you\'d ever like to unsubscribe from the news, simply request this by replying to any email from CrazyJ36.";
        // maybe the only way to access php variable inside javascript that's already in written php.
        echo "<script>var php_var = '$msg'; alert(php_var);</script>"; // echoing A script only, so this gets returned to js as data that runs a script.
        echo "You've signed up for emails' to: <br>". $email_data; // echoing text that can be put into email.
    } else {
        echo "<script>alert('Please enter an email address in the email field.')</script>";
        echo "Signup to hear about new music first:"; // reset email-label to default
    } return;
    
?>