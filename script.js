function openMenu(){
    let nav = document.querySelector(".fa-solid.fa-bars");//the button with id menuButton
    let menuList = document.getElementById("display");//this is the id I put for my ul
    nav.onclick = function() { 
        menuList.style.display = "flex";
    };
}

document.addEventListener("DOMContentLoaded", function () {
    openMenu();
});