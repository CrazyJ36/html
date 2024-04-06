function getVariablesFromServer() {
    var clientVar = "Client variable";
    $.ajax({
        method: "POST",
        url: "get-variables-from-server.php",
        data: {
            client_var: clientVar,
            client_text_field: $("p.client-text-field").text()
        }
    })
        .done(function (response) {
            $("p.server-var-field").html(response) // get variable from server code response.
        });
}

function runBrowserCodeFromPhp() {
    var clientVar = "Client variable";
    $.ajax({
        method: "POST",
        url: "run-browser-code-from-php.php",
    })
        .done(function (response) {
            $("p.alert-successful-placeholder").html(response)
        });
}

