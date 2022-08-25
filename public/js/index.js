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
    window.location.href = "/public/html/getInvolved.html;"
}