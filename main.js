
$('.checkbox').click(function(){
    if ($('input.checkbox').is(':checked')){
    $('.theme').attr('href', 'css/dark.css');
    }
    else{
    $('.theme').attr('href', 'css/light.css');
    }
    });
    
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