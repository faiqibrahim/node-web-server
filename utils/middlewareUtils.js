const express = require('express');
const logger = require('./logger');
const settings = require('../settings');

var loadMiddleware = (app) => {
    //logging requests
    app.use((req, resp, next) => {
        var logData = `${req.method} - ${req.originalUrl}`;
        logger.log(logData);
        next();
    });

    app.use(express.static(settings.ABS_PATH_ROOT + '/public'));
};

module.exports = {
    loadMiddleware
};