/*BOTOES NAV*/
$(document).ready(function() {
    $('nav a').bind({
        'click': function() {
            $('nav a').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTOES NAV 2*/
$(document).ready(function() {
    $(".menuclick").click(function() {
        $("#menuresponsive").fadeOut();
    });
});
/*BOTOES BIOGRAFIA SIZA*/
$(document).ready(function() {
    $('.botoesbio').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pagbio').hide();
            $('#pagbio' + id).fadeIn('fast');
            $('.botoesbio').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTOES OBRA SIZA*/
$(document).ready(function() {
    $('.botoesobra').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pagobra').hide();
            $('#pagobra' + id).fadeIn('fast');
            $('.botoesobra').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTOES SERRALVES*/
$(document).ready(function() {
    $('.botoesser').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pagser').hide();
            $('#pagser' + id).fadeIn('fast');
            $('.botoesser').removeClass('selected2');
            $(this).addClass('selected2');
        }
    });
});
/*BOTOES CARREIRA SOUTO MOURA*/
$(document).ready(function() {
    $('.botoescar').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pagcar').hide();
            $('#pagcar' + id).fadeIn('fast');
            $('.botoescar').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTOES LINGUAGEM SOUTO MOURA*/
$(document).ready(function() {
    $('.botoeslin').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.paglin').hide();
            $('#paglin' + id).fadeIn('fast');
            $('.botoeslin').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTOES MERCADO*/
$(document).ready(function() {
    $('.botoesmer').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pagmer').hide();
            $('#pagmer' + id).fadeIn('fast');
            $('.botoesmer').removeClass('selected2');
            $(this).addClass('selected2');
        }
    });
});
/*BOTAO PREMIOS SIZA*/
$(document).ready(function() {
    $("#iconsiza").click(function() {
        $(".premiossizatudo").toggle();
    });
});
/*Datas premios siza*/
$(document).ready(function() {
    $('.premiossiza').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.prsiza').hide();
            $('#prsiza' + id).fadeIn('fast');
            $('.premiossiza').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*Datas premios siza*/
$(document).ready(function() {
    $('.premiossizar').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.prsizar').hide();
            $('#prsizar' + id).fadeIn('fast');
            $('.premiossizar').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTAO PREMIOS SOUTO MOURA*/
$(document).ready(function() {
    $("#iconsm").click(function() {
        $(".premiossmtudo").toggle();
    });
});
/*Datas premios souto moura*/
$(document).ready(function() {
    $('.premiossm').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.prsm').hide();
            $('#prsm' + id).fadeIn('fast');
            $('.premiossm').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
/*BOTAO PREMIOS CARRILHO*/
$(document).ready(function() {
    $("#iconcarrilho").click(function() {
        $(".premioscarrilhotudo").toggle();
    });
});
/*Datas premios carrilho*/
$(document).ready(function() {
    $('.premioscarrilho').bind({
        'click': function() {
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.prcarrilho').hide();
            $('#prcarrilho' + id).fadeIn('fast');
            $('.premioscarrilho').removeClass('selected');
            $(this).addClass('selected');
        }
    });
});
$(document).ready(function() {
    $("#ftcasahisticon").hover(function() {
        $("#ftcasahist").toggle();
    });
});
$(document).ready(function() {
    $("#ftmercadoicon").hover(function() {
        $("#ftmercado").toggle();
    });
});
$(document).ready(function() {
    $("#ftserralvesicon").hover(function() {
        $("#ftserralves").toggle();
    });
});
/*MENU HAMBURGUER*/
$(document).ready(function() {
    $("#iconmenu").click(function() {
        $("#menuresponsive").toggle();
        $('.linhamenu').toggleClass('menuactive');
    });
});
$(document).ready(function() {
    $("#liobras").click(function() {
        $("#ulobras").toggle();
        $("#ularq").hide();
    });
});
$(document).ready(function() {
    $("#liarq").click(function() {
        $("#ularq").toggle();
        $("#ulobras").hide();
    });
});
