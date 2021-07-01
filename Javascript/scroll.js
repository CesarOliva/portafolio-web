$(document).ready(function(){

    //Scroll Elementos menu
    var acercaDe = $('#sobre-mi').offset().top;

    $('#btn-sobre-mi').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe -50
        }, 500);
    })

    var Conocimientos = $('#conocimientos').offset().top;

    $('#btn-conocimientos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Conocimientos -50
        }, 700);
    })
    var Trabajos = $('#trabajos').offset().top;

    $('#btn-trabajos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Trabajos -50
        }, 900);
    })
    var Contacto = $('#contacto').offset().top;

    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto -50
        }, 1200);
    })

    $('#volver').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1200);
    })

    //medias
    /*$(window).scroll(function(){
        var windowWidth = $(window).width();

        if (windowWidth > 485){
            //dom
            var nav = document.createElement('div')
            padre.setAttribute('class', "contenedor-navbar")
            padre.innerHTML =  `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuNavegacion" aria-controls="menuNavegacion" aria-expanded="false" aria-label="Alternar menu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menuNavegacion">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" id="btn-sobre-mi" href="#">Sobre-mi</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" id="btn-conocimientos">Conocimientos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="btn-trabajos" href="#">Trabajos</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" id="btn-contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            `

            var contenido = document.getElementsByTagName('header')
            contenido.appendChild(nav)
        }
    });*/

})