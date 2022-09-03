"use strict";
window.oncontextmenu =()=>{
    // alert(Disabled);
return false;

}

// nav bar

document.getElementById("menuItem").onmouseover =()=>{
    document.getElementById("drop").style.display ="block";
}
// document.getElementById("menuItem").onmouseleave =()=>{
//     document.getElementById("drop").style.display ="none";
// }

// get  involved btn
document.getElementById("btnInvolve").onclick = ()=>{
    window.location.href = "/public/html/getInvolved.html";
}



// Gallery slide
// var slideShow = "orange";
// function change(){
//     var image =document.getElementById('slide');
//     if(slideShow == 'orange'){
//         image.src='/public/images/event3.jpeg';
//         slideShow ='blue';
//     }
//     else{
//         image.src ="/public/images/background.jpg";
//         slideShow='orange';
//     }
    
// }
// var timer = setInterval (()=>{
//     change();
// },2000);

// function stop (){
//     clearInterval(timer);
// }
var i =0;
var images =[];
var time = 5000;

images[0]='/public/images/event3.jpeg';
images[1]='/public/images/youthRep.jpeg';
images[2]='/public/images/offtake.jpeg';
images[3]='/public/images/kids.jpeg';

function changeImg (){
    // document.getElementById('slide').src = images[i];
    document.slide.src = images[i];
    if( i < images.length - 1){
        i++;
    }else{
        i=0;
    }

    setTimeout('changeImg()', time);
}
window.onload = changeImg;
