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


function buscarDominio( arreglo ) {
  return arreglo.filter( element => {
    if ( element.campoCorreo.split( '@' )[1] == 'upb.edu.co' ) {
        return element;
    }
  } );
}

function retornarCuenta( args ) {
    console.log( args );
    let cuenta = 0;
    args.forEach( element => {
        if ( element.campoNombre.includes( 'a' ) ) {
            if ( element.campoTelefono.slice( -1 ) == '4' || element.campoTelefono.slice( -1 ) == '0' ) {
                cuenta++;
            }
        }
    });
    return cuenta;
}

module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;