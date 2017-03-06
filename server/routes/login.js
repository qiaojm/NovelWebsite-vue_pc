var express = require('express');
var router = express.Router();
var cfg = require('../config.js');

router.get('/', function(req, res, next) {
    res.render('login', {
        title:"登录",
        dataToRender:{
            loginUri : cfg.login_uri
        }
    });
});
module.exports = router;