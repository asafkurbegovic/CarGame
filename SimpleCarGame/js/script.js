
$('#reset').click(function (){
    $('.car').css({left:0});
    $('.infos span').text('');

})
$('#race').click(function(){
    
    var carwidth = $('#car1').width();
    var track = $('#raceTrack').width()-carwidth;
    
    var complete = false;
    
    var place = 'first';
    
    var time1 = Math.floor((Math.random()*5000)+1);
    var time2 = Math.floor((Math.random()*5000)+1);
    
    function check (){
        if (complete==false)
            complete==true;
        else
            place ='second';
    }
    
    $('#car1').animate({
        left:track
    }, time1, function(){
        check();
        $('#inforCarOne span').text('Place: '+place+' and time:'+time1);
    })
    
    $('#car2').animate({
        left:track
    }, time2, function(){
        check();
        $('#inforCarTwo span').text('Place: '+place+' and time:'+time2);
    })
});
