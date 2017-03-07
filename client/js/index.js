$(function(){
    var data={
        "0":{
            "book_id":"62753",
            "book_name":"小谎言",
            "book_words":"我不会加入学校里的任何派系。”初来乍到，珍知道，作为单亲妈妈，你的疏离就是礼貌。",
            "img_url":"img/62753l.jpg"
        },
        "1":{
            "book_id":"62565",
            "book_name":"偷影子的人",
            "book_words":"不知道姓氏的克蕾儿。这就是你在我生命里的角色，我童年时的小女孩，今日蜕变成了女人，一段青梅竹马的回忆，一个时间之神没有应允的愿望。",
            "img_url":"img/62565l.jpg"
        },
        "2":{
            "book_id":"64394",
            "book_name":"狼的恩赐",
            "book_words":"我被赋予这种能力，是一种诅咒，还是一种恩赐？ 23岁的鲁本，英俊富有，怀揣文学梦想，被人称作“阳光男孩”。",
            "img_url":"img/64394l.jpg"
        },
        "3":{
            "book_id":"62613",
            "book_name":"三生三世十里桃花",
            "book_words":"记忆可以封存，可心有时也会背叛，忘得了前世情缘，忘不了桃林十里，亦忘不了十里桃林中玄衣的少年。",
            "img_url":"img/62613l.jpg"
        }
    };
    var samllhtml="",
        largehtml="";
    $.each(data,function(index,content){
        samllhtml+="<div class='img'><img src='"+content.img_url+"' alt='"+content.book_name+"' title='"+content.book_name+"'></div>";
        largehtml+="<div class='large-img'><a href='/bookinfo'"+content.book_id+"'><img src='"+content.img_url+"' alt='"+content.book_name+"' title='"+content.book_name+"'></a><h1><a href='/"+content.book_id+"'>"+content.book_name+"</a></h1>"+
            "<p>"+content.book_words+"</p></div>";
    });
    $(".small-img").html(samllhtml);
    $(".img-show").html(largehtml);
    var smallimg=$(".small-img");
    $(".img-show").imgsLoop(smallimg);
})