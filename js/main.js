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

//Actions
$('#pImage').click(function(){
    nOpen('#pImage', '#cProjects');
    nClose('#tImage', '#cTinker');
    nClose('#mImage', '#cMore');
});

$('#tImage').click(function(){
    nOpen('#tImage', '#cTinker');
    nClose('#pImage', '#cProjects');
    nClose('#mImage', '#cMore');
});

$('#mImage').click(function(){
    nOpen('#mImage', '#cMore');
    nClose('#tImage', '#cTinker');
    nClose('#pImage', '#cProjects');
});

$('#cProjects').click(function(){
    nClose('#pImage', '#cProjects');
})
$('#cTinker').click(function(){
    nClose('#tImage', '#cTinker');
})
$('#cMore').click(function(){
    nClose('#mImage', '#cMore');
})
