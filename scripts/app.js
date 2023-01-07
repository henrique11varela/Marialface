let openMenu = function() {
    let ham = document.getElementById("iham");
    let cross = document.getElementById("icross");
    let menu = document.getElementById("menu");
    ham.classList.toggle("hidden");
    cross.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    console.log("hamburger icon changed");
}