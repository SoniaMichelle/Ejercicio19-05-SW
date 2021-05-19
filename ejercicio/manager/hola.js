$(document).ready(function(){
    $('#btn_enviar').click(function(){
        $.ajax({
            type:'POST',
            url: './control/control_mensaje.php',
            data: {
                'saludo':'Hola Mundo'
            },
            success: function(resultado) {
                console.log(resultado)
                $('#mostrar_mensaje').text(resultado);
            }
        })
    });
});