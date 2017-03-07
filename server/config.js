
const config = {
    name:"read",
    http:{
        port:"8080"
    },
    base_url_static_file:"/static",
    static_file_folder: "../client",
    login_uri:{
        login_qq:"javascript:void(0)",
        login_sina: "javascript:void(0)",
        login_wechat: "javascript:void(0)"
    },

}
module.exports = config;