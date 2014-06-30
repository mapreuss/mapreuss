$(document).ready(function(){
	$(".openMenu").click(function(){
		var menu = $(this).attr('href');
		$(menu).toggleClass("open");
		$(this).toggleClass("ativo");
		return false;
	});
	ScrollJobs('projetos');
});

function ScrollJobs(id){
	var id = "#"+id;
	var larguraItem = $(id + " li").outerWidth();
	var qdadeItem = $(id + " li").length;
	var thumbsVisiveis = Math.round($(id).parent().outerWidth() / larguraItem);
	
	$(id).css({
		"width":qdadeItem*larguraItem,
		"left":0});

	$(id).wrap("<div class='mask'></div>");
	$(id).parent(".mask").css({
		"overflow":"hidden",
		"margin":"auto",
		"height": $(id + " li").height(),
		"width":thumbsVisiveis*larguraItem
	});
	$(id).parent(".mask").wrap("<div class='carrossel'></div>")

	$(id).parent().parent().prepend("<div class='before'>Anterior</div>");
	$(id).parent().parent().append("<div class='after'>Próximo</div>");

	var btnVoltar = $(id).parent().parent().find(".before");
	var btnAvancar = $(id).parent().parent().find(".after");

	$(btnVoltar).css({
		"cursor":"auto",
		"opacity":0.5
	})

	$(btnVoltar).click(function(){		
		if (!$(id).is(':animated')) {
			var pos = parseInt($(id).css("left"));
			if(pos < 0){
				$(id).animate({"left":"+="+thumbsVisiveis*larguraItem},500);
				var pos = parseInt($(id).css("left"));
				$(btnAvancar).css({
						"cursor":"pointer",
						"opacity":1
					})
			} else {
				$(this).css({
					"cursor":"auto",
					"opacity":0.5
				});
				return false;
			}
		}
	});
	$(btnAvancar).click(function(){	
		if (!$(id).is(':animated')) {
			var pos = parseInt($(id).css("left"));
			if(pos > (larguraItem*qdadeItem)*-1+(thumbsVisiveis*larguraItem)){
				$(id).animate({"left":"-="+thumbsVisiveis*larguraItem},500);
				$(btnVoltar).css({
						"cursor":"pointer",
						"opacity":1
					})
			} else {				
				$(this).css({
					"cursor":"auto",
					"opacity":0.5
				});
				return false;
			}
		}
	});

	
}

