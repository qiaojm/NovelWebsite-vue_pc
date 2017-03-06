var express = require('express');
var router = express.Router();
var cfg = require('../config.js');
var request = require('request');
var Q = require('q');

router.get('/', function (req, res, next) {

    
    

    request(cfg.pay_uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body)
            res.render('pay', {
                title: "充值",
                dataToRender: {
                    loginUri: cfg.login_uri
                },
                payInfo: result.data
            });
        }
    });

});
module.exports = router;