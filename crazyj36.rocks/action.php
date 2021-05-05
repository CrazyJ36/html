<?php
    if (isset($_POST['email-field']) && $_POST['email-field'] > 0) {
        file_put_contents('emails.txt', $_POST['email-field']. "\n", FILE_APPEND);
        echo '<script>alert("Thank you! You will recieve important new about CrazyJ36 Music. If you\'d ever like to unsubscribe from this list, simply request this by replying directly to any of the emails\' from CrazyJ36. Press back to continue browsing crazyj36.rocks!")</script>';
        return;
    } else {
        echo '<script>alert("No email was entered. Press back and try again.")</script>';
    }
?>