
//	SETUP BEGINS

//id of the container div to load pages in
var javaScriptContainer="#jContainer";

//id of the homepage link div
var homelink="#homelink";

//name of the default index file (generally "index.php" or "index.html", under folder pages; e.g.: page1, page2)
var defaultIndex="index.php";

//name of the homepage file
var homepageFile="main.php";

//	SETUP ENDS

$(document).ready(function(){
	jQuery.fx.off=true;
	if(window.location.hash){
		var hashURL=window.location.hash;
		var pathnameURL=window.location.pathname;
		var paramSplit=hashURL.split("?");
		var hash=paramSplit[0];
		var params="?"+paramSplit[1];
		var croppedHash=hash.substring(1);
		var newURL=pathnameURL+croppedHash;
		jQuery.fx.off=false;
		if(paramSplit[1]=="" || paramSplit[1]==null){
			$(javaScriptContainer).hide("fade",100,function(){
				$(javaScriptContainer).empty().load(newURL+"/"+defaultIndex,function(){
					$.getScript("func.js");
				});
				$(javaScriptContainer).show("fade",150);
			});
			history.pushState("","New URL: "+newURL, newURL);
		}else{
			$(javaScriptContainer).hide("fade",100,function(){
				$(javaScriptContainer).empty().load(newURL+"/"+defaultIndex+params,function(){
					$.getScript("func.js");
				});
				$(javaScriptContainer).show("fade",150);
			});
			history.pushState("","New URL: "+newURL+params, newURL+params);
		}
	}else if(!window.location.hash && window.location.pathname=="/"){
		jQuery.fx.off=false;
		$(javaScriptContainer).hide("fade",100,function(){
			$(javaScriptContainer).empty().load(homepageFile,function(){
				$.getScript("func.js");
			});
			$(javaScriptContainer).show("fade",150);
		});
	}
	$("#navContainer .nav").click(function(){
		jQuery.fx.off=false;
		$(window.opera ? 'html' : 'html, body').animate({
			scrollTop: 0
		},500);
		href=$(this).attr("href");
		$(javaScriptContainer).hide("fade",100,function(){
			$(javaScriptContainer).empty().load(href,function(){
				$.getScript("func.js");
			});
			$(javaScriptContainer).show("fade",150);
		});
		history.pushState("","New URL: "+href,href);
	});
	$(homelink).click(function(){
		jQuery.fx.off=false;
		$(window.opera ? 'html' : 'html, body').animate({
			scrollTop: 0
		},500);
		$(javaScriptContainer).hide("fade",100,function(){
			$(javaScriptContainer).empty().load("/"+homepageFile,function(){
				$.getScript("func.js");
			});
			$(javaScriptContainer).show("fade",150);
		});
		history.pushState("","New URL: "+"/","/");
	});
});

//	REST OF THE JAVASCRIPT CAN BE WRITTEN UNDER func.js