
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        
        }
    });
    $('.chart').easyPieChart({
        //your configuration goes here
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep : function(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
        },
    });
    
    var typed = new Typed(".typed",{
        strings :["Software Engineer.","Web Developer.", "UI/UX."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false,
    })
    
 });
