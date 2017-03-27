$(document).ready(function(){
    /*запуск видео*/
//    function stopViseo(){
//        var iframes = $('.video-wrap > iframe[src$="autoplay=1"]'),            
//            playingSrc = iframes.attr('src');
//            
//        if(iframes.length>0){
//            var stopSrc = playingSrc.replace("autoplay=1", "autoplay=0");
//            iframes.attr('src' , stopSrc);
//        }
//    }
    
//    $('.video-wrap').on('click', function(){
//        var iframe = $(this).find('iframe'),
//            srcPath = iframe.attr('src'),
//            srcPlay = srcPath + '?autoplay=1',
//            img = $(this).find('img');            
//        
//        stopViseo();
//        
//        iframe.show().attr('src' , srcPlay);
//        $(this).find('.video-hid').hide();
//        img.hide();
//        if($(this).closest('#js-intro-video')){
//            $(this).closest('#js-intro-video').addClass('shad-container');
//        }
//    })
    
    /*валидация на заполнение отправка формы и ответ*/
    $('.js-form-val').on('submit', function(e){
        e.preventDefault();
    
        var form = $(this),
            fields = $(form).find('.js-val'),            
            valid = true;
    
        $.each($(fields), function(){
            if (!$.trim($(this).val())){
                $(this).closest('.input-wrap').addClass('error');
                valid = false;            
            } else {
                $(this).closest('.input-wrap').removeClass('error');
            }
        });
    
            if (valid){
               $.ajax({
    				url: "#",
    				type: "POST",
    				response: "HTML",
    				data: $(this).serialize(),    
                    success: function(data) {
    					$(form).closest('.form').html(
                            '<div class="ok-message"><h2>Спасибо за заявку</h2><p>Наши менеджеры свяжутся с вами<br>в ближайшее время</p></div>'
                        );                     
                    },
    				error: function() {
    					console.log("Не возможно отправить");
    				}
    			});
            }
    }); 
        
    
    $('.js-val').on('keypress', function(){
        $(this).closest('.input-wrap').removeClass('error');
    });
    
    /*открыть отзыв*/
//    $('.reviws_more').on('click', function(){
//        var container = $(this).closest('.reviws_textblock'),
//            wrap = container.find('.reviws_textwrap'),
//            fullHeight = container.find('.reviws_text').outerHeight(true);
//        if(container.hasClass('open')){
//            container.removeClass('open');
//            wrap.removeAttr('style');            
//        } else {
//            container.addClass('open');
//            wrap.css('height', fullHeight + 'px');
//        }
//    });
//    $('.reviws_slider .slick-slide').on('cssClassChanged', function(){
//        $(this).find('.reviws_textblock').removeClass('open');
//        $(this).find('.reviws_textwrap').removeAttr('style');
//    });
//    $('.reviws_video-slider').on('click', function(e){
//        var target = $( e.target );
//        if( (target.hasClass('slick-arrow')) || (target.is('button')) ){
//            stopViseo();
//            $('.reviws_slider').find('.reviws_textblock').removeClass('open');
//            $('.reviws_slider').find('.reviws_textwrap').removeAttr('style');
//        }
//    });
//    
//    $('.programm_slider').on('click', function(e){
//        var target = $( e.target );
//        if( (target.hasClass('slick-arrow')) || (target.is('button')) ){
//            stopViseo();
//        }
//    });
//    $('.carusel_item').on('click', function(){
//        stopViseo();
//    });
    
    
    
    /*эффекты*/
    $(window).on('scroll',function(){
        var winHeight = $(window).scrollTop(),
            winBoth = $(window).scrollTop() + $(window).height();        

//        if($('#js-info-list-2').length){            
//            $('#js-info-list-2 li').each(function(){
//                if (((winBoth - 100) > ($(this).offset().top)) && ((winHeight + 100) < ($(this).offset().top))){
//                    $(this).addClass('show-item');
//                }
//            });
//        }
//        if($("#js-elevator").length){
//            var elevator = $('#js-elevator').offset().top,
//                elevatorHeight = $('#js-elevator').height(),
//                elevatorBoth = elevator + elevatorHeight,
//                elevatorCont = $('#js-elevator-cont').offset().top,
//                elevatorContHeight = $('#js-elevator-cont').height(),
//                elevatorContBoth = elevatorCont + $('#js-elevator-cont').outerHeight(true);
//            if(winHeight > elevatorCont){ 
//                $('#js-elevator').addClass('elevator-go');
//                if(((winHeight - elevatorCont) + 10 + elevatorHeight) <  elevatorContHeight){
//                    $('#js-elevator').css('top', (winHeight - elevatorCont) + 10 +  'px');
//                }            
//            } else{
//                $('#js-elevator').removeClass('elevator-go').css('top', 0);
//            } 
//        } 
        
        /*покраснения*/
        function or(orName){
            var orange = $(orName).offset().top;
            if(((winBoth - 200) > orange) && ((winHeight + 100) < orange)){
                $(orName).addClass('oradge-open');
            }
        }
        if($("#js-orange-1").length){
            or($("#js-orange-1"));
        }
        if($("#js-orange-2").length){
            or($("#js-orange-2"));
        }
        if($("#js-orange-3").length){
            or($("#js-orange-3"));
        }
        if($("#js-orange-4").length){
            or($("#js-orange-4"));
        }
        if($("#js-orange-5").length){
            or($("#js-orange-5"));
        }
        
        /*линии*/
        function line(lineName){
            var line = $(lineName).offset().top;
            if(((winBoth - 200) > line) && ((winHeight + 100) < line)){
                $(lineName).addClass('line');
            }
        }
        if($("#js-line-1").length){
            line($("#js-line-1"));
        }
        if($("#js-line-2").length){
            line($("#js-line-2"));
        }
        if($("#js-line-3").length){
            line($("#js-line-3"));
        }
        if($("#js-line-4").length){
            line($("#js-line-4"));
        }
        if($("#js-line-5").length){
            line($("#js-line-5"));
        }
        if($("#js-line-6").length){
            line($("#js-line-6"));
        }
        if($("#js-line-7").length){
            line($("#js-line-7"));
        }
        if($("#js-line-8").length){
            line($("#js-line-8"));
        }
        if($("#js-line-9").length){
            line($("#js-line-9"));
        }
        if($("#js-line-10").length){
            line($("#js-line-10"));
        }
        
        /*линии*/
        function cards(cardsName){
            var card = $(cardsName).offset().top;
            if(((winBoth - 200) > card) && ((winHeight + 100) < card)){
                $(cardsName).addClass('show-card');
            }            
        }
        if($("#js-card-1").length){
            cards($("#js-card-1"));
        }
        if($("#js-card-2").length){
            cards($("#js-card-2"));
        }
        if($("#js-card-3").length){
            cards($("#js-card-3"));
        }
        if($("#js-card-4").length){
            cards($("#js-card-4"));
        } 
    });     
    
    /*прокрутка до формы*/
    $('.js-scroll').click(function(e){
        e.preventDefault();
        var anchor = $(this).attr("href");
        var scroll_el = $(anchor);
        if ($(scroll_el).length != 0) { 
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top}, 600); 
        }
    });
    
    /*аккордион*/
    $('.js-toggler').on('click', function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.js-spoiler').slideUp(250);
        } else{
            $(this).siblings().removeClass('active').next('.js-spoiler').slideUp(250);
            $(this).addClass('active').next('.js-spoiler').slideDown(250);
        }
    })
    
    /*отзывы*/
    
    $(".fancybox").fancybox();
    
		// slider
	var owlSliderBig = $('.b-reviewsl-carousel').owlCarousel({
		startPosition: 0,
	    center: true,
	    items:1,
	    loop:true,
	    animateOut: 'fadeOut',
	    nav: true,
	    margin:5

	});	
	owlSliderBig.on('change.owl.carousel', function(event) {
        $('.b-reviews-text').removeClass('active');
        $('.b-more').removeClass('active');	
	});
    
    $('.b-more').on('click', function(){
        $(this).closest('.b-reviews-text').toggleClass('active');        
    });
    
    /*запуск видео*/
    function stopViseo(){
        var iframes = $('iframe[src$="autoplay=1"]'),            
            playingSrc = iframes.attr('src');
            
        if(iframes.length>0){
            var stopSrc = playingSrc.replace("?autoplay=1", "?autoplay=0");
            iframes.attr('src' , stopSrc);
        }
    }
    
    $('.video-blind').on('click', function(){
        var container = $(this).closest('.video-wrap'),
            iframe = container.find('iframe'),
            srcPath = iframe.attr('src'),
            srcPlay = srcPath + '?autoplay=1'   
        
        stopViseo();
        
        iframe.show().attr('src' , srcPlay);
        $(this).hide();
    });
    
    $('.owl-carousel').on('click', function(e){
        var target = $( e.target );
        if( (target.hasClass('owl-prev')) || (target.hasClass('owl-next')) || (target.hasClass('owl-dot'))){
            stopViseo();
        }
    });
    
});