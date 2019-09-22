'use strict';

//load dot env configuration file
require('dotenv').config();

const express = require('express');
const logger = require('morgan')
const app = express();
const mongo = require('./config/mongo-db');
const bodyParser = require('body-parser');

//use logger middleware
app.use(logger('dev'));

//ue middleware json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

require('./models');

async function startSerever() {
    await mongo.start();

    const routes = require('./routes');
    
    //CORS middleware
    var allowCrossDomain = function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    }
    app.use(allowCrossDomain);

    //use routes middeleware
    app.use(routes);

    app.use(express.static(__dirname + '/dist/demo-ui'));

    //start express server
    app.listen({
        host: process.env.HOST,
        port: process.env.PORT
    }, () => {
        console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
    });
}

startSerever()