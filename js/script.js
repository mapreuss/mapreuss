$(document).ready(function(){
	$(".openMenu").click(function(){
		var menu = $(this).attr('href');
		$(menu).toggleClass("open");
		return false;
	});
});

