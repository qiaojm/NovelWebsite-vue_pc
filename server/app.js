/**
 * Module dependencies.
 */
var path = require('path');
var cfg = require('./config.js');

/* load express */
var express = require('express');
var app = express();

/* register view engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* register static file middleware */
// Reference: http://www.expressjs.com.cn/4x/api.html#app.use
app.use(express.static(path.join(__dirname, cfg.static_file_folder)));

/* register route */
var registerRoutes = require('./routes.js');
registerRoutes(app);

module.exports = app;
