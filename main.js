const express = require('express');
const build = require('./build'); 
const root = require('./server/modules/root/route');
let app = express();

build.middleware(app);

app.use('/', root);

build.server(app);
