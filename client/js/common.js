$(function () {
    var docHeight = $("html").height();
    $(".mask").css("height", docHeight);
    $(".mask").on("click", function () {
        $(this).fadeOut();
        $(".modal").fadeOut();
    });
})