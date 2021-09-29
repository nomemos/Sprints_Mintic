function validar_telefono(string){
    var myRe = /^[0-9]{6,10}$/
    var myArray = myRe.test(string)
    console.log(myArray)
    if (!myArray){
        alert("Su numero telefonico no cumple con los requisitos");
    }
    /* if (string.length>6&&string.length<=10){
        
    else {
        alert("Su numero telefonico no cumple con los requisitos");
    }
    }*/
}

function validar_telefono2(){
    var telefono=document.Validacion.campoTelefono;
    console.log (telefono.value);
    validar_telefono(telefono.value);
}

function validar_direccion(string){
    var myRe = /^(\Carrera|Transversal|Circular|Calle)[ -]*{7,30}[ -]*$/
    var myArray = myRe.test(string)
    console.log(myArray)
    if (!myArray){
        alert("Su direccion no cumple con los requisitos");
    }
}

function validar_direccion2(){
    var direccion=document.Validacion.campoDireccion;
    console.log (direccion.value);
    validar_direccion(direccion.value);
}


/*module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;*/