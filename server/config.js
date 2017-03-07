
const config = {
    name:"read",
    http:{
        port:"8080"
    },
    base_url_static_file:"/static",
    static_file_folder: "../client",
    login_uri:{
        login_qq:"http://www.liu-liang.net:8000/v1.0/login/qq/qqlogin",
        login_sina: "http://www.liu-liang.net:8000/v1.0/login/weibo/weiboLogin",
        login_wechat: "http://www.liu-liang.net:8000/v1.0/login/wechat/pc"
    },
    pay_uri:"http://wenhua.yueloo.com/v1.0/pay/"

}
module.exports = config;