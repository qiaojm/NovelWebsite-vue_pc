var express = require('express');
var router = express.Router();
var cfg = require('../config.js');

router.get('/', function(req, res, next) {
    res.render('bookinfo', {
        title:"书籍详情页",
        dataToRender:{
            loginUri : cfg.login_uri
        }
    });
});
module.exports = router;