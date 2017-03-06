var express = require('express');
var router = express.Router();
var cfg = require('../config.js');

router.get('/', function(req, res, next) {
    res.render('library', {
        title:"书库",
        dataToRender:{
            loginUri : cfg.login_uri
        }
    });
});
module.exports = router;