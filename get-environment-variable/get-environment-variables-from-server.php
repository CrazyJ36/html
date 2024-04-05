<?php 
// Set TestEnvironmentVariable to A variable you set in Apache httpd.conf using SetEnv eg(SetEnv My_VARIABLE "VARIABLE_VALUE")
    echo apache_getenv('TestEnvironmentVariable', true); 
?> 