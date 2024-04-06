function getEnvironmentVariableFromServer() {
    $.ajax({
        method: "POST",
        url: "get-environment-variables-from-server.php"
    })
        .done(function (response) {
            $("p.text-field").html(response)
        });
}
