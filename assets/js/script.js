$(document).ready(function(){
   
    jcf.replaceAll();

    $('.selector-tabs div').on('click', function(){
        var formItem = $(this).data('group');
        $('.selector-tabs div').removeClass('active');
        $(this).addClass('active');
        $('form').removeClass('active');
        $('.' + formItem).addClass('active');
    });

    $( ".close-popup" ).click(function(event) {
        $('.popup').removeClass('open-popup');
        $('.dark-display').removeClass('open-popup');
    });
    
    $('.open-menu').click(function(){
        $('.mobile-menu').toggleClass('active')
    })
});