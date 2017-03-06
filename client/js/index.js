$(function(){
    var data={
        "0":{
            "book_id":"62753",
            "book_name":"亲爱的，我们离婚吧",
            "book_words":"这里是编辑推荐语小姑子一通电话，把我喊到某现场。 在那里，我看到我的在那里，我看到我的",
            "img_url":"img/62753l.jpg"
        },
        "1":{
            "book_id":"62565",
            "book_name":"英雄联盟之特种兵王",
            "book_words":"特种兵王陈枭穿越到了水浒世界，利用现代知识忽悠梁山好汉，拐骗水泊英雄，打造出一支属于他的精锐水浒军！",
            "img_url":"img/62565l.jpg"
        },
        "2":{
            "book_id":"64394",
            "book_name":"昆明，今夜你将谁遗忘",
            "book_words":"大三毕业前夕，我把校花给……然后我借钱陪她去堕胎……",
            "img_url":"img/64394l.jpg"
        },
        "3":{
            "book_id":"62613",
            "book_name":"奇闻异录",
            "book_words":"有一个有趣的女朋友是一种怎样的体验？ 我只谈过一次恋爱，她也很有趣，只不过，她只有我一个人能看见。",
            "img_url":"img/62613l.jpg"
        }
    };
    var samllhtml="",
        largehtml="";
    $.each(data,function(index,content){
        samllhtml+="<div class='img'><img src='"+content.img_url+"' alt='"+content.book_name+"' title='"+content.book_name+"'></div>";
        largehtml+="<div class='large-img'><a href='/"+content.book_id+"'><img src='"+content.img_url+"' alt='"+content.book_name+"' title='"+content.book_name+"'></a><h1><a href='/"+content.book_id+"'>"+content.book_name+"</a></h1>"+
            "<p>"+content.book_words+"</p></div>";
    });
    $(".small-img").html(samllhtml);
    $(".img-show").html(largehtml);
    var smallimg=$(".small-img");
    $(".img-show").imgsLoop(smallimg);
})