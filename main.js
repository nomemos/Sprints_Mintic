$('.checkbox').click(function(){
    if ($('input.checkbox').is(':checked')){
            $('.theme').attr('href', 'dark.css');
    }
    else{
        $('.theme').attr('href', 'light.css');
    }
});