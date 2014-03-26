$(document).ready(function () {
	//Make side bar scroll with window
	$(window).scroll(function (event) {
		// what the y position of the scroll is
		var y = $(window).scrollTop();
		//position of sidebar while scrolled past 150px
		var offset = $(window).scrollTop()-150;
		// check if scrolled past limit
		if (y >= 150) {
			// if so, ad the fixed class and position
			$("#sidebar").css("postion","fixed");
			$("#sidebar").css("top", offset);
			} else {
			// otherwise remove it
			$("#sidebar").css("postion","relative");
			$("#sidebar").css("top", "0");
		}
	});
	var cnt = 1;
	$("#content").find(":header").each(function(){		
		$(this).attr("id","header"+cnt);	
		var currId = this.id;
		var currHtml = this.innerHTML;
		$("#sidebarlist").append("<li><a href=\"#"+currId+"\">"+currHtml+"</a></li>");
		cnt++;
	});	
});


