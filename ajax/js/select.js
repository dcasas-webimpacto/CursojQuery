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
            content += '<tr id="fila>'+alumno.id+'">';
            content += '<td>'+alumno.id+'</td>';
            content += '<td>'+alumno.nombre+'</td>';
            content += '<td class="text-center">';
            content += '    <a href="actualizar.html?id='+alumno.id+'" class="btn btn-primary"><i class="fa fa-edit"></i></a>';
            content += '</td>';
            content += '<td class="text-center">';
            content += '    <a href="" data-nombre="'+alumno.nombre+'"data-id="'+alumno.id+'" class="btn btn-danger botEliminar"><i class="fa fa-trash"></i></a>';
            content += '</td>';
            content += '</tr>';

            $("#tblRegistros").append(content);




        });
    
    })
    .fail(function(){
        console.log("Fallo!");
    });
    
    

});

    $("body").on("click",".botEliminar",function(e){
        e.preventDefault();

        var nombre = $(this).data("nombre");
        var id = $(this).data('id');
        
          swal({
            title: 'Estas seguro?',
            text: "De querer borrar a: "+nombre,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, bórralo!',
            cancelButtonText: 'Cancelar',
            closeOnConfirm: false,
            closeOnCancel: true
          },
          function(isConfirm){
              if (isConfirm){
                    borrarRegistro(id);
              }
          });



function borrarRegistro(id){
    
        //CUANDO ESTAMOS SEGUROS QUE LO DESEAMOS BORRAR
        // var id = $(this).data('id');
        // console.log(id);
        
        $.ajax({
            type: 'POST',
            url : 'php/servicios/post.eliminaalumno.php?id='+id,
            dataType: 'json'
        })
        .done(function( data ){
            
            console.log("Correcto!");
        
            console.log( data ); // Se imprime en consola la api

            $("#fila"+id).remove();
            swal("Borrado!", "El registro ha sido eliminado correctamente.","success");
    });
    
}

});

})();