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
var slideShow = "orange";
function change(){
    var image =document.getElementById('slide');
    if(slideShow == 'orange'){
        image.src='/public/images/event3.jpeg';
        slideShow ='blue';
    }
    else{
        image.src ="/public/images/background.jpg";
        slideShow='orange';
    }
    
}
var timer = setInterval (()=>{
    change();
},2000);

function stop (){
    clearInterval(timer);
}
