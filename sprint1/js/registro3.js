/* let arregloCompleto = [];

function agregar() {
    arregloCompleto.push( {
        campoNombre: document.Validacion.campoNombre.value,
        campoUsuario: document.Validacion.campoUsuario.value,
        campoContraseña: document.Validacion.campoContraseña.value,
        campoTelefono: document.Validacion.campoTelefono.value,
        campoDireccion: document.Validacion.campoDireccion.value,
        campoCorreo: document.Validacion.campoCorreo.value,
        campoConfirmacion: document.Validacion.campoConfirmacion.value
    } );
    console.log( arregloCompleto );
}

function buscarDominio2 () {
    nuevoArreglo = buscarDominio( arregloCompleto );
    console.log( 'retornarCuenta ', retornarCuenta( nuevoArreglo ) );
} */

arreglo = [{
    campoNombre: "",
    usuario: "",
    password: "",
    campoTelefono: "",
    direccion: "",
    campoCorreo: ""
}];

function buscarDominio(  ) {
    let nuevoArreglo = [
        {
            campoNombre: "",
            usuario: "",
            password: "",
            campoTelefono: "",
            direccion: "",
            campoCorreo: ""
        }
    ];
    for ( let i = 0; i < arreglo.length; i++ ) {
        if ( arreglo[i].campoCorreo.split( '@' )[1] == 'upb.edu.co' ) {
            nuevoArreglo.push( arreglo[i] );
        }
    }
    return nuevoArreglo;
  /* return arreglo.filter( element => {
    if ( element.campoCorreo.split( '@' )[1] == 'upb.edu.co' ) {
        return element;
    }
  } ); */
}

function retornarCuenta( args ) {
    console.log( args );
    let cuenta = 0;
    for ( let i = 0; i < args.length; i++ ) {
        if ( args[i].campoNombre.includes( 'a' ) ) {
            if ( args[i].campoTelefono.slice( -1 ) == '4' || args[i].campoTelefono.slice( -1 ) == '0' ) {
                cuenta++;
            }
        }
    }
    /* args.forEach( element => {
        if ( element.campoNombre.includes( 'a' ) ) {
            if ( element.campoTelefono.slice( -1 ) == '4' || element.campoTelefono.slice( -1 ) == '0' ) {
                cuenta++;
            }
        }
    }); */
    return cuenta;
}

module.exports.arreglo = arreglo;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;