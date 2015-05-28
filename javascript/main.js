$(document).ready(function(){
    $('#jumbotron #content').load('welcome.html');
    
    $('.tab').click(function(event){
        event.preventDefault();
        var page = $(this).attr('href');   
        var content = $('#jumbotron #content');
        content.fadeOut(400,function(){
            content.load(page, function(){ 
                content.fadeIn(400);
        });
        
            
        });        
        $('.active').removeClass('active');
        $(this).parent().addClass('active');
    });
});