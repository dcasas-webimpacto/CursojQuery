(function(){

	var Latitude = 39.865256;
	var Longitude = -4.025267;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		var clima = data;
	
			var html = "";
				html+='<tr>';
				html+='	<td>'+clima.base+'</td>';
				html+='	<td>'+clima.clouds.all+'</td>';
				html+='	<td>'+clima.sys.id+'</td>';
				html+='	<td>'+clima.coord.lon+'</td>';
				html+='	<td>'+clima.wind.speed+'</td>';
				html+='</tr>';
				$(".table").append(html);
		
		
		// console.log(climas.clouds.all);
		// console.log(climas.base);
		// console.log(climas.coord.lon);
		// console.log(climas.wind.speed);
		// console.log(climas.sys.id);

		 console.log( data ); // Se imprime en consola la api


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();