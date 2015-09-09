function verificar_primo(url){

    var numero = $("#numero").val();
    
    /*Verifico que no se pueda ingresar letras ni valores nulos*/
    if ( numero == parseInt(numero) || numero != "") {
        
        /*Creo el nuevo objeto*/
        var hilo = new Worker(url+"/js/module/application/index/hilo_circular.js");
        /*Inicio el hilo*/
        hilo.postMessage(numero);
        /*Luego que el hilo devuelve relizo acciones segun su resultado*/
        hilo.onmessage = function(event) {
        if(event.data == true){         
                $("#header_modal").html("<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\">Correcto</h4>");
                $("#modal_body").html(("<p>El número ingresado es circular</p>"));
                $("#modal_add").modal();
            }else{
                $("#header_modal").html("<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\">Advertencia</h4>");
                $("#modal_body").html(("<p>El número ingresado no es circular</p>"));
                $("#modal_add").modal();
            }
        };
    }else{
        $("#header_modal").html("<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\">Advertencia</h4>");
        $("#modal_body").html(("<p>No se aceptan valores nulos ni alfabéticos</p>"));
        $("#modal_add").modal();
        $("#numero").focus();
    }
}

function verificar_circular(url){
    
    /*Elimino el contenido del div en el caso que ya tenga algun contenido */
    $("#container_circulares").html("");

    var hilo = new Worker(url+"/js/module/application/index/hilo_circulares.js");

    hilo.postMessage(1000000);

    hilo.onmessage = function(event) {
        var cointainer = $("#container_circulares").html();
        $("#container_circulares").html(cointainer + event.data);

    };

}
