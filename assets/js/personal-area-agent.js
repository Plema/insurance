$(document).ready(function(){

    $('.personal-items').showmore({
        closedHeight: 525,
        buttonTextMore: 'Еще опции',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });

});

$(window).resize(function(){



});