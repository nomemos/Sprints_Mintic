
//modo oscuro
$('.checkbox').click(function(){
    if ($('input.checkbox').is(':checked')){
    $('.theme').attr('href', 'css/dark.css');
    }
    else{
    $('.theme').attr('href', 'css/light.css');
    }
    });


    // Tamaño de letra
    var cambio =document.getElementById('cambio'),
    parrafo = document.getElementById('parrafo'),
    contador=0;

    function cambiar()
    { if (contador==0)
        { 
            parrafo.classList.add('ampliado');
                contador=1;
        }

        else 
        {
            parrafo.classList.remove('ampliado');
            contador=0;
        }
    }
cambio.addEventListener('click',cambiar,true)



// Sonido
const sonidoFondo = new Audio( 'sonido/fondo.mp3' );
let reproduciendo = true;

window.onload = () => {
    sonidoFondo.play();
}

function controlarSonido() {
    try {
        if ( reproduciendo ) {
            reproduciendo = false;
            sonidoFondo.pause();
        } else {
            sonidoFondo.play();
           reproduciendo = true;
        }
    } catch ( err ) {
        console.error( err );
    }
}