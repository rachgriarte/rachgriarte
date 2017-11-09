var path = require('path');

module.exports = function (app) {

    //sends the user the index.html file 
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    //sends the user the about.html file 
    app.get('/story', function (req, res) {
        res.sendFile(path.join(__dirname + '/about.html'));
    });

    //sends the user the projects.html file 
    app.get('/contact', function (req, res) {
        res.sendFile(path.join(__dirname + '/projects.html'));
    });
};