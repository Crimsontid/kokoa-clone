$(function(){
    $('.slide-01').click(function(){
        $('.control-box__title01').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title02').fadeOut();
        $('.control-box__title03').fadeOut();
        $('.control-box__title04').fadeOut();
        $('.control-box__title05').fadeOut();
        $('.control-box__title06').fadeOut();
        $('.control-box__title07').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.displayNone01').fadeIn();
        $('.displayNone02').fadeOut();
        $('.displayNone03').fadeOut();
        $('.displayNone04').fadeOut();
        $('.displayNone05').fadeOut();
        $('.displayNone06').fadeOut();
        $('.displayNone07').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone00').hide();
    });
    $('.slide-02').click(function(){
        $('.control-box__title02').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title01').fadeOut();
        $('.control-box__title03').fadeOut();
        $('.control-box__title04').fadeOut();
        $('.control-box__title05').fadeOut();
        $('.control-box__title06').fadeOut();
        $('.control-box__title07').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone02').fadeIn();
        $('.displayNone01').fadeOut();
        $('.displayNone03').fadeOut();
        $('.displayNone04').fadeOut();
        $('.displayNone05').fadeOut();
        $('.displayNone06').fadeOut();
        $('.displayNone07').fadeOut();
        $('.displayNone00').hide();
    });
    $('.slide-03').click(function(){
        $('.control-box__title03').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title02').fadeOut();
        $('.control-box__title01').fadeOut();
        $('.control-box__title04').fadeOut();
        $('.control-box__title05').fadeOut();
        $('.control-box__title06').fadeOut();
        $('.control-box__title07').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone03').fadeIn();
        $('.displayNone02').fadeOut();
        $('.displayNone01').fadeOut();
        $('.displayNone04').fadeOut();
        $('.displayNone05').fadeOut();
        $('.displayNone06').fadeOut();
        $('.displayNone07').fadeOut();
        $('.displayNone00').hide();
    });
    $('.slide-04').click(function(){
        $('.control-box__title04').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title02').fadeOut();
        $('.control-box__title03').fadeOut();
        $('.control-box__title01').fadeOut();
        $('.control-box__title05').fadeOut();
        $('.control-box__title06').fadeOut();
        $('.control-box__title07').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone04').fadeIn();
        $('.displayNone02').fadeOut();
        $('.displayNone03').fadeOut();
        $('.displayNone01').fadeOut();
        $('.displayNone05').fadeOut();
        $('.displayNone06').fadeOut();
        $('.displayNone07').fadeOut();
        $('.displayNone00').hide();
    });
    $('.slide-05').click(function(){
        $('.control-box__title05').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title02').fadeOut();
        $('.control-box__title03').fadeOut();
        $('.control-box__title04').fadeOut();
        $('.control-box__title01').fadeOut();
        $('.control-box__title06').fadeOut();
        $('.control-box__title07').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone05').fadeIn();
        $('.displayNone02').fadeOut();
        $('.displayNone03').fadeOut();
        $('.displayNone04').fadeOut();
        $('.displayNone01').fadeOut();
        $('.displayNone06').fadeOut();
        $('.displayNone07').fadeOut();
        $('.displayNone00').hide();
    });
    $('.slide-06').click(function(){
        $('.control-box__title06').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title02').fadeOut();
        $('.control-box__title03').fadeOut();
        $('.control-box__title04').fadeOut();
        $('.control-box__title05').fadeOut();
        $('.control-box__title01').fadeOut();
        $('.control-box__title07').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone06').fadeIn();
        $('.displayNone02').fadeOut();
        $('.displayNone03').fadeOut();
        $('.displayNone04').fadeOut();
        $('.displayNone05').fadeOut();
        $('.displayNone01').fadeOut();
        $('.displayNone07').fadeOut();
        $('.displayNone00').hide();
    });
    $('.slide-07').click(function(){
        $('.control-box__title07').fadeIn();
        $('.play').fadeOut();
        $('.pause').fadeIn();  
        $('.control-box__title02').fadeOut();
        $('.control-box__title03').fadeOut();
        $('.control-box__title04').fadeOut();
        $('.control-box__title05').fadeOut();
        $('.control-box__title06').fadeOut();
        $('.control-box__title01').fadeOut();
        $('.control-box__title2').fadeOut();
        $('.playBTN').hide();
        $('.MusicAlbum-playBar__playAction_pause ').show();
        $('.displayNone07').fadeIn();
        $('.displayNone02').fadeOut();
        $('.displayNone03').fadeOut();
        $('.displayNone04').fadeOut();
        $('.displayNone05').fadeOut();
        $('.displayNone06').fadeOut();
        $('.displayNone01').fadeOut();
        $('.displayNone00').hide();
    });

    $('.MusicList li:first-child').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani1').show();
        $('.ani2').hide();
        $('.ani3').hide();
        $('.ani4').hide();
        $('.ani5').hide();
        $('.ani6').hide();
        $('.ani7').hide();
    });

    $('.MusicList li:first-child').click(function(){
        $('.MusicList li:nth-child(2)').removeClass('boxShadow');
        $('.MusicList li:nth-child(3)').removeClass('boxShadow');
        $('.MusicList li:nth-child(4)').removeClass('boxShadow');
        $('.MusicList li:nth-child(5)').removeClass('boxShadow');
        $('.MusicList li:nth-child(6)').removeClass('boxShadow');
        $('.MusicList li:nth-child(7)').removeClass('boxShadow');

    });


    $('.MusicList li:nth-child(2)').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani2').show();
        $('.ani1').hide();
        $('.ani3').hide();
        $('.ani4').hide();
        $('.ani5').hide();
        $('.ani6').hide();
        $('.ani7').hide();
    });

    $('.MusicList li:nth-child(2)').click(function(){
        $('.MusicList li:nth-child(1)').removeClass('boxShadow');
        $('.MusicList li:nth-child(3)').removeClass('boxShadow');
        $('.MusicList li:nth-child(4)').removeClass('boxShadow');
        $('.MusicList li:nth-child(5)').removeClass('boxShadow');
        $('.MusicList li:nth-child(6)').removeClass('boxShadow');
        $('.MusicList li:nth-child(7)').removeClass('boxShadow');
  
    });

    $('.MusicList li:nth-child(3)').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani3').show();
        $('.ani2').hide();
        $('.ani1').hide();
        $('.ani4').hide();
        $('.ani5').hide();
        $('.ani6').hide();
        $('.ani7').hide();
    });

    $('.MusicList li:nth-child(3)').click(function(){
        $('.MusicList li:nth-child(1)').removeClass('boxShadow');
        $('.MusicList li:nth-child(2)').removeClass('boxShadow');
        $('.MusicList li:nth-child(4)').removeClass('boxShadow');
        $('.MusicList li:nth-child(5)').removeClass('boxShadow');
        $('.MusicList li:nth-child(6)').removeClass('boxShadow');
        $('.MusicList li:nth-child(7)').removeClass('boxShadow');
 
    });

    $('.MusicList li:nth-child(4)').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani4').show();
        $('.ani2').hide();
        $('.ani3').hide();
        $('.ani1').hide();
        $('.ani5').hide();
        $('.ani6').hide();
        $('.ani7').hide();
    });

    $('.MusicList li:nth-child(4)').click(function(){
        $('.MusicList li:nth-child(1)').removeClass('boxShadow');
        $('.MusicList li:nth-child(2)').removeClass('boxShadow');
        $('.MusicList li:nth-child(3)').removeClass('boxShadow');
        $('.MusicList li:nth-child(5)').removeClass('boxShadow');
        $('.MusicList li:nth-child(6)').removeClass('boxShadow');
        $('.MusicList li:nth-child(7)').removeClass('boxShadow');

    });
    $('.MusicList li:nth-child(5)').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani5').show();
        $('.ani2').hide();
        $('.ani3').hide();
        $('.ani4').hide();
        $('.ani1').hide();
        $('.ani6').hide();
        $('.ani7').hide();
    });

    $('.MusicList li:nth-child(5)').click(function(){
        $('.MusicList li:nth-child(1)').removeClass('boxShadow');
        $('.MusicList li:nth-child(2)').removeClass('boxShadow');
        $('.MusicList li:nth-child(3)').removeClass('boxShadow');
        $('.MusicList li:nth-child(4)').removeClass('boxShadow');
        $('.MusicList li:nth-child(6)').removeClass('boxShadow');
        $('.MusicList li:nth-child(7)').removeClass('boxShadow');

    });
    $('.MusicList li:nth-child(6)').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani6').show();
        $('.ani2').hide();
        $('.ani3').hide();
        $('.ani4').hide();
        $('.ani5').hide();
        $('.ani1').hide();
        $('.ani7').hide();
    });

    $('.MusicList li:nth-child(6)').click(function(){
        $('.MusicList li:nth-child(1)').removeClass('boxShadow');
        $('.MusicList li:nth-child(2)').removeClass('boxShadow');
        $('.MusicList li:nth-child(3)').removeClass('boxShadow');
        $('.MusicList li:nth-child(4)').removeClass('boxShadow');
        $('.MusicList li:nth-child(5)').removeClass('boxShadow');
        $('.MusicList li:nth-child(7)').removeClass('boxShadow');

    });
    $('.MusicList li:nth-child(7)').click(function(){
        $(this).toggleClass('boxShadow');
        $('.ani7').show();
        $('.ani2').hide();
        $('.ani3').hide();
        $('.ani4').hide();
        $('.ani5').hide();
        $('.ani6').hide();
        $('.ani1').hide();
    });

    $('.MusicList li:nth-child(7)').click(function(){
        $('.MusicList li:nth-child(1)').removeClass('boxShadow');
        $('.MusicList li:nth-child(2)').removeClass('boxShadow');
        $('.MusicList li:nth-child(3)').removeClass('boxShadow');
        $('.MusicList li:nth-child(4)').removeClass('boxShadow');
        $('.MusicList li:nth-child(5)').removeClass('boxShadow');
        $('.MusicList li:nth-child(6)').removeClass('boxShadow');

    });

    $( '.MusicList' ).sortable();




});