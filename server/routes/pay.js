var express = require('express');
var router = express.Router();
var cfg = require('../config.js');

router.get('/', function (req, res, next) {

    res.render('pay', {
        title: "充值",
        dataToRender: {
            loginUri: cfg.login_uri
        }
    });

});
module.exports = router;