<?php
    if (isset($_POST['email-field']) && $_POST['email-field'] > 0) {
        file_put_contents('emails.txt', $_POST['email-field']. "\n", FILE_APPEND);
        echo nl2br("<h1>Thank you!</h1>\r\n<strong>You will recieve important news about CrazyJ36 Music. 
        \r\n If you'd ever like to unsubscribe from this list, simply request this 
        by replying directly to any of the emails' from CrazyJ36.
        \r\n Press your browsers' back button to continue browsing crazyj36.rocks!</strong>");
        return;
    } else {
        echo nl2br("<h1>No email was entered.<h1>\r\n<strong>Please press your browsers' back button and try again.</strong>");
    }
?>