const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Config = require('./config');
const cors = require('cors');

/**
 * Exports app middleware
 */
exports.middleware = () =>
    [
        bodyParser.urlencoded({ extended: false }),
        bodyParser.json(),
        cors(),
        cookieParser(Config.cookies.parser.secret),
        session({
            secret: Config.cookies.session.secret,
            saveUninitialized: true,
            resave: true
        })
    ];

/**
 * Exports app static paths as a JSON object
 */
exports.paths = () => (
    {
        '/public': express.static(path.join(__dirname, 'server/public')),
        '/node_modules': express.static(path.join(__dirname, '../node_modules'))
    }
);
