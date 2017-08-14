
//	SETUP BEGINS

//id of the container div to load pages in
var javaScriptContainer="#jContainer";

//name of the default index file (generally "index.php" or "index.html", under folder pages; e.g.: page1, page2)
var defaultIndex="index.php";

//	SETUP ENDS

function loadAsXHR(ref){
	$(javaScriptContainer).hide("fade",100,function(){
		$(window.opera ? 'html':'html, body').animate({
			scrollTop: 0
		}, 400);
		$(javaScriptContainer).empty().load("/"+ref+"/"+defaultIndex,function(){
			$(this).show("fade",150);
		});
	});
	history.pushState("","New URL: "+ref, ref);
}

//	REST OF THE JAVASCRIPT CAN BE WRITTEN HERE