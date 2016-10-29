$(
    function()
    {
        var offset = 43;    
        var wheight = $(window).height(); //get window height

        $('.fullheight').css('height',wheight);

        $(window).resize(function()
        {
            var wheight = $(window).height(); //get window height
            $('.fullheight').css('height',wheight);
        })//resize


        //smooth scroll 
        
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top - offset + 2
                }, 1000);
                return false;
            }
            }
        });

        //navigation section higlighting
        $( window ).scroll( function()
        {   
            var windowpos = $(window).scrollTop() + offset +2;
            $('nav li a').removeClass('active');
            if ( windowpos > $('#hotelinfo').offset().top)
            {
                $('nav li a').removeClass('active');
                $('a[href$="#hotelinfo"]').addClass('active');
            } 
            if ( windowpos > $('#rooms').offset().top)
            {
                $('nav li a').removeClass('active');
                $('a[href$="#rooms"]').addClass('active');
            } 
            if ( windowpos > $('#dining').offset().top)
            {
                $('nav li a').removeClass('active');
                $('a[href$="#dining"]').addClass('active');
            }
            if( windowpos > $('#events').offset().top)
            {
                $('nav li a').removeClass('active');
                $('a[href$="#events"]').addClass('active');
            }
            if ( windowpos > $('#attractions').offset().top)
            {
                $('nav li a').removeClass('active');
                $('a[href$="#attractions"]').addClass('active');
            } 
        });



        //set up the scrollmagic
        var controller = new ScrollMagic(
        {
            globalSceneOptions : {
                triggerHook : "onLeave"
            }

        });

        var attractiontween = TweenMax.staggerFromTo('#attractions article', 1 , 
            { opacity : 0 , scale:0 },
            { opacity : 1, scale : 1, ease : Back.easeOut }
         );

        var scene =  new ScrollScene(
            {
                triggerElement : '#attractions',
                offset : -offset
            }
        ).setTween( attractiontween ).addTo( controller );

        //pining the navigation
        var pin = new ScrollScene(
            {
                triggerElement : '#nav',
                
            }
        ).setPin('#nav').addTo(controller);

        //room animations
        var roomOrigin =
        {
            bottom : -700,
            opacity : 0,
            scale : 0
        }
        var roomDest  = 
        {
            repeat : 1,
            yoyo : true,
            bottom : 0,
            opacity : 1,
            scale : 1,
            ease : Back.easeOut
        } 


        var roomtween = TweenMax.staggerFromTo(
            "#westminster .content",1, roomOrigin, roomDest
        );

        var pinw = new ScrollScene(
            {
                triggerElement : '#westminster',
                offset : -offset,
                duration : 1000
            }
        ).setPin('#westminster').setTween(roomtween).addTo(controller);

    }
);