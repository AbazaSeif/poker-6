$(document).ready(function(){
    
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
    
    /*эффекты*/
    $(window).on('scroll',function(){
        var winHeight = $(window).scrollTop(),
            winBoth = $(window).scrollTop() + $(window).height();
    
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
    
    /*показ даты*/
    
    var Data = new Date(),
        Month = Data.getMonth(),
        Day = Data.getDate(),
        lastDay = Day + 2;

    // Преобразуем месяца
    switch (Month)
    {
      case 0: fMonth="января"; break;
      case 1: fMonth="февраля"; break;
      case 2: fMonth="марта"; break;
      case 3: fMonth="апреля"; break;
      case 4: fMonth="мае"; break;
      case 5: fMonth="июня"; break;
      case 6: fMonth="июля"; break;
      case 7: fMonth="августа"; break;
      case 8: fMonth="сентября"; break;
      case 9: fMonth="октября"; break;
      case 10: fMonth="ноября"; break;
      case 11: fMonth="декабря"; break;
    }

    // Вывод
    $('#date-container').html(lastDay + " " + fMonth);

    
});