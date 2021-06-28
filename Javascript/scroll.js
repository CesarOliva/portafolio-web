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
        }, 800);
    })
    var Contacto = $('#contacto').offset().top;

    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: Contacto -50
        }, 1000);
    })

    $('#volver').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

})