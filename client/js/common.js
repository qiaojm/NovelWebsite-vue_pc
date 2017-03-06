$(function () {

    /**
     * 设置cookie
     */
    function setCookie(name, value, expireSecond, domain, path) {
        var exdate = new Date();
        var temptime = exdate.getTime() + expireSecond * 1000;
        exdate.setTime(temptime);
        document.cookie = name + "=" + encodeURIComponent(value) +
            ";expires=" + exdate.toUTCString() + ";path=" + path + ";domain=" + domain + ";";
    }

    /**
     * 获得cookie
     */
    function getCookie(name) {
        if (document.cookie.length > 0) {
            var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
            if (arr != null) {
                return decodeURIComponent(arr[2].trim());
            }
        }
        return null;
    }

    setCookie('device_type', 'pc', 300, "liu-liang.net", "/");
    setCookie("jump_url", location.href, 300, "liu-liang.net", "/");

    var isLogin = getCookie("signature") && getCookie("user_id") && getCookie("user_uuid");
    var userAvatar = "";
    if (isLogin) {
        if (sessionStorage.getItem("user_avatar")) {
            userAvatar = sessionStorage.getItem("user_avatar");
            $(".login-btn").html('<a href="javascript:viod(0)" ><img src="'+userAvatar+'"></a>');
        } else {
            $.ajax({
                method: "GET",
                url: "http://www.liu-liang.net:8000/v1.0/user/useravatar",
                xhrFields: {
                    withCredentials: true
                },
                // async:false,
                success: function (data) {
                    console.log(data)
                    if (data.code == 200) {

                        var userAvatar = data.data.avatar;
                        sessionStorage.setItem("user_avatar", userAvatar);
                        console.log(userAvatar)
                        $(".login-btn").html('<a href="javascript:viod(0)" ><img src="'+userAvatar+'"></a>');
                    }
                }
            });
            $.ajax({
                method: "GET",
                url: "http://www.liu-liang.net:8000/v1.0/user/userinfo",
                xhrFields: {
                    withCredentials: true
                },
                success: function (data) {
                    console.log(data)
                    // if (data.data.code == 200) {
                    //     userAvatar = data.data.data.avatar;
                    //     sessionStorage.setItem("user_avatar", this.userAvatar);
                    // }
                }
            })


        }
    }


    var docHeight = $("html").height();
    $(".mask").css("height", docHeight);
    $(".mask").on("click", function () {
        $(this).fadeOut();
        $(".modal").fadeOut();
    });
})