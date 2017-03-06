/**
 * Module dependencies.
 */
var path = require('path');
var cfg = require('./config.js');

/* load express */
var express = require('express');
var app = express();

/* register view engine */
// app.engine('.html',require('ejs'));// set .html as the default extension
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* register static file middleware */
// Reference: http://www.expressjs.com.cn/4x/api.html#app.use
app.use(express.static(path.join(__dirname, cfg.static_file_folder)));

/*var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('../webpack.config.js');

var compiler = webpack(webpackDevConfig);
*/
// attach to the compiler & the server
// app.use(webpackDevMiddleware(compiler, {
//
//     // public path should be the same with webpack config
//     publicPath: webpackDevConfig.output.publicPath,
//     noInfo: true,
//     stats: {
//         colors: true
//     }
// }));
// app.use(webpackHotMiddleware(compiler));


/* register route */
var registerRoutes = require('./routes.js');
registerRoutes(app);

module.exports = app;
