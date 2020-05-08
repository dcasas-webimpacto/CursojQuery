(function(){
	var $cajaRoja = $(".cajaRoja");
	$("#botonTamano").on("click",function(){
		$cajaRoja.animate({
			width: "+=100",
			height: "+=100px",
		},function(){
			console.log("Termino la animación del tamaño");	
		}).animate({
			width: "-=100",
			height: "-=100px",
		}).animate({
			opacity: 0.1
		},1500,function(){
			$(this).remove();
		})
	});
})();