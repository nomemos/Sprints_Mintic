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

let registros = [];

function buscarDominio(  ) {
    let objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'usuario': document.getElementById('campoUsuario').value,
        'direccion': document.getElementById('campoDireccion').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncorreo': document.getElementById('campoConfirmacionCorreo').value,
        'telefono': document.getElementById('campoTelefono').value
    };
    registros.push( objeto );
    let nuevoArreglo = [];
    for ( let i = 0; i < registros.length; i++ ) {
        if ( registros[i].correo.includes( 'upb.edu.co' ) ) {
            nuevoArreglo.push( registros[i] );
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
        if ( args[i].nombre.includes( 'a' ) ) {
            if ( args[i].telefono.slice( -1 ) == '4' || args[i].telefono.slice( -1 ) == '0' ) {
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

//module.exports.arreglo = arreglo;
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;