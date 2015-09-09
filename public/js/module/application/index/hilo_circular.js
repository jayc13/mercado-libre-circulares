self.addEventListener('message', function(event) {

    var es_primo = primo(event.data);

    if(es_primo == true && event.data.length == 1){
        self.postMessage(true);
    }
    
    if(es_primo == false){
        self.postMessage(false);
    }

    var num_gir = girar_num(event.data);

    if(es_primo == true && num_gir != event.data){
        self.postMessage(true);
    }
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