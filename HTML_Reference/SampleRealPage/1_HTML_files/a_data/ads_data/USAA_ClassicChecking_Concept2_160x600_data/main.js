var _tt = new TimelineMax(),
    po2 = Power2.easeOut,
_loadedImages=0,
_imageArray=new Array(
                        'copy1.png',
                        'copy2.png',
                        'copy3.png',
                        'copy4.png',
                        'copy5.png',
                        'copy6.png',
                        'logo.png',
                        'bullet.svg',
                        'dollar.svg',
                        'pocket.svg',
                        'cta_out.png',
                        'cta_over.png'
    );

this.addEventListener('DOMContentLoaded', preloadImages);

function preloadImages() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
    }
}

function trackProgress(){
    _loadedImages++;             
    if(_loadedImages == _imageArray.length) init();
}

function init(){ 
    var css = document.createElement( 'link' );
    css.setAttribute( 'rel', 'stylesheet' );
    css.setAttribute( 'type', 'text/css' );
    css.setAttribute( 'href', "style.css" );
    document.getElementsByTagName('head')[0].appendChild(css);

    initAnimations();
}

function initAnimations(){
     _tt
     .to('.dollar', .5,{top:28}, '+=.5')
     .to('#dollar2', .5,{rotation:3}, '-=.2')
     .to('#dollar3', .5,{rotation:15}, '-=.2')
     .to('#copy1', .5,{scaleY:1, opacity:1,ease: po2}, '-=.2')
     .to('#copy1', .5,{scaleY:0, opacity:0,transformOrigin:"left bottom",ease: po2}, '+=2')
     .to('#copy2', .5,{scaleY:1,opacity:1,ease: po2}, '-=.4')
     .to('#copy2', .4,{scaleY:0, opacity:0, transformOrigin:"left bottom",ease: po2}, '+=2')
     .to('#poket_cont', .4,{opacity:0,ease: po2}, '-=.4')
     .staggerTo('.copyBullet', .5,{scaleY:1, opacity:1,ease: po2}, .4, '-=.1')
     .to('.copyBullet', .5, {opacity:0,ease: po2}, '+=2.5')
     .to('#star',.6,{scale:1, opacity:1, ease:po2}, '-=.5')
     .to('#redLines',.5,{opacity:1, ease:po2}, '-=.3')
     .to('#logo',.5,{opacity:1, ease:po2}, '-=.5')
     .to('#copy6',.5,{opacity:1, ease:po2}, '-=.5')
     .to('#cta_out',.5,{opacity:1, ease:po2, onComplete: actionsButton}, '-=.1')
    ;
}

function actionsButton(){  
    elem('#btn-exit').addEventListener('mouseover',function(){ TweenMax.to('#cta_over',.25,{ opacity:1 })});
    elem('#btn-exit').addEventListener('mouseout',function(){ TweenMax.to('#cta_over',.25,{ opacity:0 })});
}
function elem(id){return document.querySelector(id)};