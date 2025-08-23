const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet.hidePoweredBy()); // Remove the X-Powered-By header

app.use(helmet.frameguard({ action: 'deny' }));

app.use(helmet.xssFilter())

app.use(helmet.noSniff())

app.use(helmet.ieNoOpen())

const timeInSeconds = 90 * 24 * 60 * 60; 
app.use(helmet.hsts({ maxAge: timeInSeconds, force: true }))


 




















exports.default = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Useful Programmer Info Security App Server is running on port ${port}`);
});
