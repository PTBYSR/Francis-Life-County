document.getElementById("nav-ham").onclick = function(){
    console.log('hiiii');
    document.getElementById("nav-menu").style.right = "-2px";
    document.getElementById("nav-ham").style.display = "none";
    document.getElementById("nav-x").style.display = "block";
    document.getElementById("nav-x").style.zIndex = "1000";
    document.getElementById("nav-x").style.position = "absolute";
    document.getElementById("nav-x").style.right = "19px";
    document.getElementById("nav-x").style.top = "50px";
    // z-index: 100;
    // right: 10px;
    // position: absolute

}

document.getElementById("nav-x").onclick = function(){
    document.getElementById("nav-menu").style.right ="-100%";
    console.log('ghghgh')
    document.getElementById("nav-x").style.display = "none";
    document.getElementById("nav-ham").style.display = "block";

}