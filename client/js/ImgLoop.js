(function($){
	$.fn.extend({
		imgsLoop:function(obj){
			var num=0,timer=null;
			var largeImg=this.children(),
				smallImg=obj.children();
			largeImg.eq(num).fadeIn();
			smallImg.eq(num).addClass("active");
			function loop(){
				largeImg.eq(num).hide();
				smallImg.eq(num).removeClass("active");
				num=num==3?0:num+1;
				largeImg.eq(num).fadeIn();
				smallImg.eq(num).addClass("active");
			}
			timer=setInterval(loop,2500);
			smallImg.on("click",function(){
				clearInterval(timer);
				var index=smallImg.index($(this));
				largeImg.eq(num).hide();
				smallImg.eq(num).removeClass("active");
				num=index;
				largeImg.eq(num).fadeIn();
				smallImg.eq(num).addClass("active");
				timer=setInterval(loop,2500);
			})
		}
	})
})(jQuery);