var express = require('express');
const path = require('path');

module.exports = function(app) {

    var apiRoutes = express.Router();

    // ====================================================
    // Api routes
    app.use('/api', apiRoutes);

    apiRoutes.get('/', function (req, res) {
        res.json({message: 'Hello World'}); 
    });

    // ====================================================
    // Serve react app

    // Serve static assets
    app.use(express.static(path.resolve(__dirname, '..', 'app', 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'app', 'build', 'index.html'));
    });   
}