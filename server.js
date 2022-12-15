const express = require('express'),
    ws = require('ws'),
    http = require('http'),
    app = express();
// use express static to deliver resources HTML, CSS, JS, etc)
// from the public folder
app.use(express.static('public'));
var httpServer = http.createServer(options, app).listen(3355);
console.log("The HTTP server is up and running");
var wsServer = new ws.Server({server: httpServer});
wss.on('connection', function (client) {
    console.log("A new client was connected.");
    client.on('message', function (message) { // incoming client
        wss.broadcast(message, client);
});
});
// Define a method to broadcast to all clients
wss.broadcast = function (data, exclude) {
    var i = 0, n = this.clients ? this.clients.length : 0, client = null;
    if (n &lt; 1) return;
    for (; i &lt; n; i++) {
        client = this.clients[i];
        if (client === exclude) continue;
        if (client.readyState === client.OPEN) client.send(data);
        else console.error('Error: the client state is ' +     client.readyState);
}
};