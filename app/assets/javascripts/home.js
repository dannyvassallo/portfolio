// Drag to scroll plugin
$.fn.attachDragger = function(){
    var attachment = false, lastPosition, position, difference;
    $( $(this).selector ).on("mousedown mouseup mousemove",function(e){
        if( e.type == "mousedown" ) attachment = true, lastPosition = [e.clientX, e.clientY];
        if( e.type == "mouseup" ) attachment = false;
        if( e.type == "mousemove" && attachment == true ){
            position = [e.clientX, e.clientY];
            difference = [ (position[0]-lastPosition[0]), (position[1]-lastPosition[1]) ];
            $(this).scrollLeft( $(this).scrollLeft() - difference[0] );
            $(this).scrollTop( $(this).scrollTop() - difference[1] );
            lastPosition = [e.clientX, e.clientY];
        }
    });
    $(window).on("mouseup", function(){
        attachment = false;
    });
}


// center honeycombs

function centerHoneycombs(el){
	var hcHeight = $(".honeycombs").height();
	var hcMargin = hcHeight / 3;	
    $(el).scrollTo(hcMargin);
}

$(document).ready(function() {
    // init honeycomb
    $(".honeycombs").honeycombs();
    // init drag to scroll
    $("#honeycomb-wrap").attachDragger();
    centerHoneycombs('#honeycomb-wrap');
});


// Wordflip
var words = ["Developer", "Drummer", "Designer"], i=0;

function wordFlipper(element, words){    
    var wordsloop = words[i=(i+1)%words.length];
    jQuery(element).html('<h1 class=\"flipInX animated\">'+wordsloop+'</h1>');
}

$(function(){    
    setInterval(function(){
        wordFlipper('#header_text', words);
    }, 2000 );
});

// Center header
function centerCrest(){
    var hcHeight = $('#header_crest').height(),
    winHeight = $(window).height(),
    marginHeight = (winHeight-hcHeight)/2,
    margin = marginHeight + 'px'
    $('#header_crest').css('margin-top',margin);
}

$(function(){
    $('#header_crest').on('load', function(){
        centerCrest();
    });
});

$(window).on('resize', function(){
    centerCrest();    
});


// transparency scroll
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').removeClass("still");
        $('.navbar-default .navbar-nav > li > a').css('color','#2f4155');
        $('.navbar-default .navbar-toggle .icon-bar').css('background-color','#2f4155');
    }else{
        $('.navbar').addClass("still");
        $('.navbar-default .navbar-nav > li > a').css('color','#fff');
        $('.navbar-default .navbar-toggle .icon-bar').css('background-color','#fff');
    }
}

$(function(){
    checkScroll();
    if($('.navbar').length > 0){
        $(window).on("scroll load resize", function(){
            checkScroll();
        });
    }
});
// init bigtext
// $(function() {
//     $('#header_text').bigtext({
//         minfontsize: 7
//     });
// });

// type-writer
$(function(){
    var distance = $('#about').offset().top,
    $window = $(window);
    var fired = false;
    window.addEventListener("scroll", function(){
      if ($window.scrollTop() >= distance && fired === false) {
        // only fires once
        $('.shell-body .first').css('visibility','visible').typewriter();
        setTimeout(function(){$('.shell-body .second').css('visibility','visible').typewriter()}, 3000);
        setTimeout(function(){$('.shell-body .third').css('visibility','visible').typewriter()}, 6500);
        setTimeout(function(){$('.shell-body .fourth').css('visibility','visible').typewriter()}, 9250);
        setTimeout(function(){$('.shell-body .fifth').css('visibility','visible').typewriter()}, 11500);
        fired = true;
      }
    }, true)
    $('.x-out').on('click', function(){
        $('.shell-wrap').fadeOut();
    });
});


$(function(){
    Github.userActivity({
        username: "dannyvassallo",
        selector: ".git-embed",
        limit: 20
      });
});

jQuery(document).ready(function($) {
    $(".scrollto").click(function(event) {
        event.preventDefault(); 

        var defaultAnchorOffset = 0;

        var anchor = $(this).attr('data-attr-scroll');

        var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset; 

        $('html,body').animate({ 
            scrollTop: $('#'+anchor).offset().top - anchorOffset
        }, 500);        
    });
});

function resizeSpot(){
    var videoH = $('.video').height();
    $('.spotify').css('height',videoH);
}

$(function(){
    resizeSpot();
});

$(window).resize(function(){
    resizeSpot();
});

var clickcounter = 0;
// link hider
$(function(){
    $('.navbar-brand').click(function(){
        if (clickcounter < 7){
            clickcounter++;
            console.log(clickcounter);
        } else {
            $('.sign-in').removeClass('hider');
        }
    });
});