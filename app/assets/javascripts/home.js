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