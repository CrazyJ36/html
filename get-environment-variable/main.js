function getEnvironmentVariableFromServer() {
    $.ajax({
        method: "POST",
        url: "get-environment-variables-from-server.php"
    })
        .done(function (response) {
            $("p.text-field").html(response) // For security, set response to as an <object>(html).
        });
}
