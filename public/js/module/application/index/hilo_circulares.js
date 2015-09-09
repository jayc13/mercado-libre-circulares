self.addEventListener('message', function(event) {

    var es_primo;
    var numero;
    var cantidad_primos = 0;
    var bandera;

    for (var i = 1; i < event.data; i ++) {
        numero = i;
        bandera = 0;
        do {
                es_primo = primo(numero);
                if(es_primo == false) {
                        bandera = 1;
                }
                numero = girar_num(numero);
        } while( es_primo == 1 && numero != i);

        if ( bandera == 0 ) {
                 self.postMessage("<div class=\"btn btn-default\">" + i + "</div>");
                 cantidad_primos++;
        }
    };

    self.postMessage("<div class=\"btn btn-success\">Cantidad Total: " + cantidad_primos + "</div>");

}, false);

function primo(numero){
    
    var contador = parseInt(( parseInt(Math.sqrt(numero)) + 1 ) / 6 );
    
    if( numero == 2 || numero == 3){
        return true;
    }
    if( numero == 1 || (numero%2) == 0 || (numero%3) == 0 ){
        return false;
    }
    
    for (var i = 1; i <= contador; i++) {    
        if (((numero%( (i*6)-1)) == 0 ) || ( numero%( (i*6)+1 ) ==0 )){ 
            return false;
        }
    };

    return true;
}

function girar_num (numero) {
    
	var ult = parseInt(numero/10);
	var girar = numero%10;
	numero = ult;
	while ( numero!= 0) {
		girar = girar * 10;
		numero = parseInt(numero/10);
	}

	return girar + ult;
}