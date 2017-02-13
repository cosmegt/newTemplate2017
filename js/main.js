//Vars
openTime = 80;
delayTime = openTime/2
closeTime = openTime + delayTime;
var display = 'something';

//OOP functions
var Page = function(title, image, description){
    this.title = title;
    this.image = image;
    this.description = description;
}

//OOP Objects
var photoAlbum = new Page("Photo Album", "source somewhere", "An CSS/HTML/JS simple album using external libraries.");
var teamRetail = new Page("Team Retail", "source somewhere", "A website store page made with OOP programming in teams.")
//Jquery START UP
$(document).ready(function(){});

//Funtions
//Open Main Menu
var nOpen= function(elementIDo, iElementIDo){
    $(elementIDo).addClass('zoomOut animated');
    $(elementIDo).delay(delayTime).fadeOut(openTime);
    $(iElementIDo).delay(closeTime).fadeIn(openTime);
    $('closer').show();
}
//Close Main Menu
var nClose= function(elementIDc, iElementIDc){
    $(elementIDc).removeClass('zoomOut animated');
    $(elementIDc).delay(closeTime).fadeIn(openTime);
    $(iElementIDc).delay(delayTime).fadeOut(openTime);
    closeDisplay();
    
}
//Open Second Menu
var oMenu = function(menuID){
    $(menuID).animate({
        left: '120px'
    });
}
//Close Second Menu
var cMenu = function(menuIDc){
    $(menuIDc).animate({
        left: '-400px'
    });
}
//Open Third Menu
var setDisplay = function(){
    $('#dTitle').html(display.title);
    $("displayer").animate({
        left: '520px'
    },400);
}
var closeDisplay = function(){
    $('displayer').animate({
        left: '-500px'
    },400);
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
    $('closer').hide();
})
$('#cTinker').click(function(){
    nClose('#tImage', '#cTinker');
    cMenu('tMenu');
    $('closer').hide();
})
$('#cMore').click(function(){
    nClose('#mImage', '#cMore');
    cMenu('mMenu');
    $('closer').hide();
})
$('closer').click(function(){
    nClose('#mImage', '#cMore');
    nClose('#tImage', '#cTinker');
    nClose('#pImage', '#cProjects');
    cMenu('mMenu');
    cMenu('tMenu');
    cMenu('pMenu');
    $('closer').hide();
})

$('#li1').click(function(){
    display = photoAlbum;
    setDisplay();
})
$('#li2').click(function(){
    display = teamRetail;
    setDisplay();

})