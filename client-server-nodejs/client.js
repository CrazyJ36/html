console.log('client running');
$.ajax({
    type: 'GET',
    url: 'https://crazyj36.rocks:3000/',
    success: function(response) {
        alert(response);
    },
    error: function(error) {
        alert('couldn\'t connect to node.js server:\n' + error.error);
    }
})