$(document).ready(function(){
    $('#btn_boton').click(function(){
        $.ajax({
            type: 'POST',
            url: './control/control_mesnaje3.php',
            data: {
                'bandera_mensaje1':'Bienvenido',
                'bandera_mensaje2':'Espero que tengas',
                'bandera_mensaje3':'un hermoso dia! :D'
            },
            success:function(resultado){
                console.log(resultado);
                $('#mostrar_mensaje').text(resultado);
            }
        })
    })
})