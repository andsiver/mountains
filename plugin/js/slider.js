$('#destinations-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    center:true,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed: 900,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:20,
        },
        460:{
            items:2,
        },
        690:{
            items:3,
        },
        920:{
            items:4,
        },
        1100:{
            items:5,
            loop:false,
            center:false
        },
        1200:{
            items:5,
            margin:32,
            loop:false,
            center:false
        }
    }
});

$('#brands-carousel').owlCarousel({
    rtl: true,
    loop:true,
    nav:false,
    dots: false,
    margin:0,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 900,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        500:{
            items:3,
        },
        700:{
            items:4,
        },
        900:{
            items:5,
        },
        1100:{
            items:6,
            loop:false
        }
    }
});

$('#reviews-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    margin:40,
    autoplay:true,
    autoplayTimeout:7000,
    smartSpeed: 1400,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        1100:{
            items:2,
        }
    }
});