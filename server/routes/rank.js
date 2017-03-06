var express = require('express');
var router = express.Router();
var cfg = require('../config.js');

router.get('/', function(req, res, next) {
    res.render('rank', {
        title:"排行榜",
        dataToRender:{
            loginUri : cfg.login_uri
        }
    });
});
module.exports = router;