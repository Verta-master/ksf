function throttle(t,n){var e=Date.now();return function(){e+n-Date.now()<0&&(t(),e=Date.now())}}function cutSeconds(t){return"-1"==(t=String(t))?"0":2==t.length?t.substr(1,1):t}function initTimer(){try{var t=$(".timer").attr("data-countdown").split(".").map(function(t){return Number(t)}),n=t[0],e=0<=t[1]-1?t[1]-1:t[1],o=t[2];countdown(new Date(o,e,n),function(t){$(".hours p").html(t.hours),$(".minutes p").html(t.minutes),$(".seconds p.current").html(t.seconds),$(".seconds p.prev").html(cutSeconds(t.seconds+1)),$(".seconds p.next").html(cutSeconds(t.seconds-1))},countdown.HOURS|countdown.MINUTES|countdown.SECONDS)}catch(t){}}initTimer();var initHeight=$(".recommend__deco").innerHeight(),itemNumber=$(".recommend__item").length;function movePill(){try{var t=$(window).height(),n=$(".pill__img").offset().top-t,e=n+$(".pill__img").height()+800;if($(this).scrollTop()>=n&&$(this).scrollTop()<=e){var o=100-.09*($(this).scrollTop()-n);550<$(this).scrollTop()-n&&$(this).scrollTop()-n<760&&(o=100-.05*($(this).scrollTop()-n)),$(".pill__tablet").css({transform:"translateY("+($(this).scrollTop()-n)+"px)translateZ("+o+"px)"})}}catch(t){}}$(".recommend__link").click(function(){$(".recommend__item:nth-child(n + 4)").slideDown(),$(this).hide();var t=initHeight+(44*(itemNumber-3)-24),n=138*Math.ceil(t/138);$(".recommend__deco").css("height",n)}),$(".btn-scroll").click(function(){event.preventDefault();$(this).attr("href");var t=220;window.innerWidth<480&&(t=390);var n=$(window).height()-t;$("body, html").animate({scrollTop:$("#payment").offset().top-n},500)}),$(window).scroll(movePill);