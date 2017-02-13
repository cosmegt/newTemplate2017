//Vars And OOP Functions
openTime = 80;
delayTime = openTime/2
closeTime = openTime + delayTime;









//Jquery
$(document).ready(function(){});

/* Navigation Funtions */
var nOpen= function(elementIDo, iElementIDo){
    $(elementIDo).addClass('zoomOut animated');
    $(elementIDo).delay(delayTime).fadeOut(openTime);
    $(iElementIDo).delay(closeTime).fadeIn(openTime);
}
var nClose= function(elementIDc, iElementIDc){
    $(elementIDc).removeClass('zoomOut animated');
    $(elementIDc).delay(closeTime).fadeIn(openTime);
    $(iElementIDc).delay(delayTime).fadeOut(openTime);
}
var oMenu= function(menuID){
    $(menuID).animate({
        left: '120px'
    });
}
var cMenu= function(menuIDc){
    $(menuIDc).animate({
        left: '-500px'
    });
}
//Actions
$('#pImage').click(function(){
    nOpen('#pImage', '#cProjects');
    nClose('#tImage', '#cTinker');
    nClose('#mImage', '#cMore');
    oMenu('pMenu');
    cMenu('tMenu');
    cMenu('mMenu');
});

$('#tImage').click(function(){
    nOpen('#tImage', '#cTinker');
    nClose('#pImage', '#cProjects');
    nClose('#mImage', '#cMore');
    oMenu('tMenu');
    cMenu('pMenu');
    cMenu('mMenu');
});

$('#mImage').click(function(){
    nOpen('#mImage', '#cMore');
    nClose('#tImage', '#cTinker');
    nClose('#pImage', '#cProjects');
    oMenu('mMenu');
    cMenu('tMenu');
    cMenu('pMenu');
});

$('#cProjects').click(function(){
    nClose('#pImage', '#cProjects');
    cMenu('pMenu');
})
$('#cTinker').click(function(){
    nClose('#tImage', '#cTinker');
    cMenu('tMenu');
})
$('#cMore').click(function(){
    nClose('#mImage', '#cMore');
    cMenu('mMenu');
})
