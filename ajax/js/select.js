(function(){


$(document).ready(function(){

    $.ajax({
        type: 'POST',
        url : 'php/servicios/get.alumnos.php',
        dataType: 'json'
    })
    .done(function( data ){
        
        console.log("Correcto!");
    
        console.log( data ); // Se imprime en consola la api
    
        if (data.error){
            alert("Algo raro paso");
            return;
        };

        data.alumnos.forEach (function(alumno, index){
            var content = "";
            content += '<tr>';
            content += '<td>'+alumno.id+'</td>';
            content += '<td>'+alumno.nombre+'</td>';
            content += '<td class="text-center">';
            content += '    <a href="actualizar.html?id='+alumno.id+'" class="btn btn-primary"><i class="fa fa-edit"></i></a>';
            content += '</td>';
            content += '<td class="text-center">';
            content += '    <a href="" data-id="'+alumno.id+'" class="btn btn-danger"><i class="fa fa-trash"></i></a>';
            content += '</td>';
            content += '</tr>';

            $("#tblRegistros").append(content);




        });
    
    })
    .fail(function(){
        console.log("Fallo!");
    });
    
    

});



})();