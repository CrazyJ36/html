function getEnvironmentVariablesFromServer() {
    $.ajax({
        method: "POST",
        url: "get-environment-variables-from-server.php",
    })
        .done(function (response) {
            $("p.text-field").html(response) // get variable from server code response.
            console.log('done.')
        });
}
