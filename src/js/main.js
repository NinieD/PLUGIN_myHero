//Recuperer la valeur de data
var url = $('.hero').data('url');
var colorblock = $('.filter-block').data('colorblock');
var opacity = $('.filter').data('opacity');

var colorfirst= $('.filter-gradient').data('colorfirst');
var colorsecond= $('.filter-gradient').data('colorsecond');
var direction=$('.filter-gradient').data('direction');

$('.hero').css({
    'background': "url("+ url +") no-repeat",
});

$('.filter-block').css({
    'background': colorblock,
    'opacity': opacity,
});

$('.filter-gradient').css({
    'background': "linear-gradient(to "+ direction +", "+ colorfirst +", "+ colorsecond +")",
    'opacity': opacity,
});
