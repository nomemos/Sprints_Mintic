function validar_telefono(string){
    var myRe = /^[0-9]{6,10}$/
    var myArray = myRe.test(string)
    console.log(myArray)
    if (!myArray){
        return false;
    } else {
        return true;
    }
}

function validar_direccion(string){
    var myRe = /^(Carrera|Transversal|Circular|Calle)[ ]*[0-9a-zA-Z]*[ ]*[a-zA-Z]*[ ]*[#][ ]*([0-9]*[A-Za-z]*[ ]*[-]*[ ]*[0-9]*[A-Za-z]*)/
    console.log( string, string.length );

    if ( string.length >= 7 && string.length <= 30 ) {
        var myArray = myRe.test(string)
        console.log(myArray)
        if (!myArray){
           return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
    
}


module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;