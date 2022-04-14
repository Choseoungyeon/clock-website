$(function () {
    $('.menu_button').click(function(){
        if($('.menu').hasClass('on')){
            $('.menu').removeClass('on')
            $('header').removeClass('close')
            window.scrollTo(0,0);
            $('.menu_ul li').animate({
                opacity:'0',
                top:'-60px'
            })
            $('.menu_swipe').removeClass('show')
        }else{
            $('.menu').addClass('on')
            $('header').addClass('close')
            for(i=0; i<=4; i++){
                $('.menu_ul li').eq(i).delay(i*120).animate({
                    opacity:'1',
                    top:'0px'
                }, 'linear')
            }
            $('.menu_swipe').addClass('show')
        }
    })

    $('body').mousemove(function (e) {
        var x1 = e.clientX;
        var y1 = e.clientY;
        $('.mouse').css({
            top: y1,
            left: x1
        });
    });

    $('.collection_swipe').mouseenter(function() {
        $('.mouse').addClass('black');
    })

    $('.collection_swipe').mouseleave(function() {
        $('.mouse').removeClass('black');
    })

    $('html').impulse();

    function active(sec, act, del) {
        if ($(this).scrollTop() > $(sec).offset().top - ($(this).height() / del)) {
            $(sec).find(act).addClass('show');
        } else {
            $(sec).find(act).removeClass('show');
        }
    };

    function active2(sec, del) {
        if ($(this).scrollTop() > $(sec).offset().top - ($(this).height() / del)) {
            $(sec).addClass('show');
        } else {
            $(sec).removeClass('show');
        }
    };

    $(window).scroll(function () {
        var win_w = $(window).width();
        var win_top = $(window).scrollTop()
        var win_h = $(window).height();
                
        if(win_w<1023){
            $('.service_content').each(function(){
                var service_content = $(this).offset().top            
                if(win_top >= service_content - 900 ){
                    $(this).addClass('show')
                }
                else if(win_top < service_content - win_h ) {
                    $(this).removeClass('show')
                }
            })
        }else{
            active('.service', '.service_left .service_content', '3.0');
            active('.service', '.service_right .service_content:nth-of-type(1)', '4.0');
            active('.service', '.service_right .service_content:nth-of-type(2)', '5.0');
            active('.service', '.service_right .service_content:nth-of-type(3)', '6.0');
            active('.service', '.service_right .service_content:nth-of-type(4)', '7.0');
        }
        active('.collection', '.collection_left', '2.5');
        active('.collection', '.collection_slide', '1.5');
        active('.caribre', '.caribre_right', '2.0');
        active('.caribre_left', '.caribre_left_img:nth-of-type(1)', '1.5');
        active('.caribre_left', '.caribre_left_img:nth-of-type(2)', '1.0');
        active2('.custom', '1.5');
        active('.custom', 'h2, form, h3, .custom_info', '2.5');
        active('.store', '.store_left', '2.0');
        active('.store', '.store_right_img', '3.0');
        active('.store', '.store_box', '5.0');
        if($('.store_box').hasClass('show')){
            active('.store_box', 'h2, input, h3', '1.5');
        }
      })

      

      
})