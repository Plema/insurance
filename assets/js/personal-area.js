$(document).ready(function(){

    $('.personal-area-content article').showmore({
        closedHeight: 315,
        buttonTextMore: 'Подробнее',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });
    
    $('.personal-enumeration .personal-items').showmore({
        closedHeight: 510,
        buttonTextMore: 'Еще опции',
        buttonTextLess: 'Скрыть',
        buttonCssClass: 'showmore-button',
        animationSpeed: 0.5,
        onlyWithWindowMaxWidth: 767
    });

    $(".date").flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });

});

$(window).resize(function(){

    

});