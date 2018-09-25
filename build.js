const mw = require('./dependencies').middleware;
const ps = require('./dependencies').paths;
const path = require('path');
const http = require('http');

/**
 * Build all the app middleware
 */
exports.middleware = (app) => {
    let middleware = mw();
    let paths = ps();
    for (let i = 0; i < middleware.length; i++)
        app.use(middleware[i]);

    Object.keys(paths).forEach(key => {
        app.use(key, paths[key]);
    });
    
}



/**
 * Build app server
 */
exports.server = (app) => {
    let port = 8081;
    http.createServer(app).listen(port, 
        () => {
            console.log("\x1b[32m", "NODEJS SERVER STATE => RUNNING ON PORT " + port);
            console.log("\x1b[0m", "DEBUG: \n");
        }
    );
}