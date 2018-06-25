
//Install express server
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 4200; //  listening on the default Heroku port
const server = http.createServer(app);
// Serve only the static files form the dist directory

app.use(express.static(path.join(__dirname, '/dist')));
///Start the app by
app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.set('port', port);
server.listen(port, () => console.log('Running...'));