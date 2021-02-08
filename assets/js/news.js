$(document).ready(function(){
   

    $('.news-item h4').matchHeight({
        byRow: false
    }); 

    $('.news-item p').matchHeight({
        byRow: false
    }); 
    

    $('.news-item .img').height( $('.news-item .img').width() / 1.2 );
    
});

$(window).resize(function(){

    $('.news-item .img').height( $('.news-item .img').width() / 1.2 );

});