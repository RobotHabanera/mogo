$(function(){$(".accordion").accordion({collapsible:!0,heightStyle:"content"})});$(".c-services-2 .accordion > h3").prepend('<span class="accord-icon"></span>');$(window).scroll(startCounter);
function startCounter(){var a=$(window).scrollTop(),b=$(".c-countup .c-countup__item").offset().top-1E3,c=$(".c-services").offset().top;a>=b&&a<c&&($(window).off("scroll",startCounter),$(".c-countup .c-countup__item").each(function(){var a=$(this),b=a.attr("data-count");$({countNum:a.children("div").text()}).one().animate({countNum:b},{duration:2E3,easing:"linear",step:function(){a.children("div").text(Math.floor(this.countNum))},complete:function(){a.children("div").text(this.countNum)}})}))}
jQuery(function(a){var b=!0,c=!0;hidden=!0;if(1199>=a(window).width()||1==b)a(".menu-trigger").click(function(b){b.preventDefault();a(".c-main-menu").offset();a(".c-main-menu").width();a("body");a(".c-main-menu").animate({left:0},350);a("body").animate({left:200},350,function(){a("body").addClass("fade")})}),b=!1;else if(1199<a(window).width()||0==b)a(".menu-trigger").unbind("click"),b=!0;if(1199<a(window).width()||1==c)c=!1;else if(1199>=a(window).width()||0==c)a(document).off("scroll",onScroll),
c=!0;a(".c-nav .c-main-menu .c-main-menu__link").on("click",function(b){a(this).hasClass("trala")||a("div.object1").remove();1199>=a(window).width()?(b.preventDefault(),a("html,body").animate({scrollTop:a(a.attr(this,"href")).offset().top-60},1E3,function(){a(".c-main-menu").animate({left:-200},{duration:200,queue:!1});a("html,body").animate({left:0},{duration:200,quee:!1})})):1199<a(window).width()&&a("html,body").unbind("animate")});onResize=function(){1199>=a(window).width()?a(".c-nav .c-main-menu").css({left:-200}):
1199<a(window).width()&&(a(".c-nav .c-main-menu").css({left:0}),a("body").css({left:0}))};a(document).ready(onResize);a(window).on("resize",onResize)});
$(window).scroll(function(){280<$(window).scrollTop()?($(".c-nav").addClass("fixed"),$(".c-main-menu__link").addClass("c-main-menu__link--font"),$(".c-main-menu h1 a").css("color","#999999"),$(".o-card").css("filter","brightness(60%)"),$(".c-main-menu__search").css("filter","brightness(60%)")):($(".c-nav").removeClass("fixed"),$(".c-main-menu__link").removeClass("c-main-menu__link--font"),$(".c-main-menu h1 a").css("color","white"),$(".o-card").css("filter",""),$(".c-main-menu__search").css("filter",
""))});function initMap(){var a={lat:-7.97366,lng:112.663896},b=new google.maps.Map(document.getElementById("map"),{zoom:16,center:a});new google.maps.Marker({position:a,map:b})}window.onload=initMap;
$(".open-map").on("click",function(){$(".map-icon").fadeOut("2000");$(".open-map").fadeOut("2000");$(".o-hr--map").fadeOut("2000");$(".map-section").animate({height:800},{duration:500,complete:function(){$(".map-section__mask").animate({opacity:"0"},{duration:500,complete:function(){$(".map-section__mask").hide();$(".map").animate({opacity:"1"},{duration:2E3,complete:function(){}})}})}})});$(".mobile-menu__item--search").click(function(a){a.preventDefault();$(".c-form__search").addClass("search_active").fadeIn(slow)});
$(".c-form__cancel").click(function(a){a.preventDefault();$(".c-form__search").removeClass("search_active")});$("html,body").niceScroll({cursorcolor:"#fff",cursorwidth:"8px",cursoropacitymax:.5,cursorborder:"1px solid darkgrey",background:"",horizrailenabled:!1});$(window).scroll($.debounce(250,!0,function(){$("#scrollMsg").html("SCROLLING!")}));
$(window).scroll($.debounce(250,function(){var a=$(document).scrollTop(),b=$("html, body");200<=a?$(".back-to-top").stop(b).animate({right:"10px"},500,function(){}):200>a&&$(".back-to-top").stop(b).animate({right:"-50px"},500,function(){})}));$("a[href='#top']").click(function(a){a.preventDefault();$("html, body").animate({scrollTop:0},"slow");return!1});