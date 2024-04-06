console.log('client running');
$.ajax({
    type: 'GET',
    url: 'https://crazyj36.rocks:3000/',
    success: function(response) {
        alert('connected to node.js server!');
    },
    error: function(err) {
        alert('couldn\'t connect to node.js server:\n' + err.error);
    }
}).then(res => res.json())
.then(res => alert(res));