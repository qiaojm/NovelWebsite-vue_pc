var routeRegister = function(app) {

    /* register page routes */
    app.use('/', require('./routes/index.js'));
    app.use('/pay', require('./routes/pay.js'));
    app.use('/userinfo', require('./routes/userinfo.js'));
    app.use('/bookshelf', require('./routes/bookshelf.js'));
    app.use('/bookinfo',require('./routes/bookinfo.js'));
    app.use('/library',require('./routes/library.js'));
    app.use('/reader',require('./routes/reader.js'));
    app.use('/login',require('./routes/login.js'));
    app.use('/rank',require('./routes/rank.js'));
    app.use('/ranklist',require('./routes/ranklist.js'));
    app.use('/commentinfo',require('./routes/commentinfo.js'));
    /* 404 */
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });

};

module.exports = routeRegister;

