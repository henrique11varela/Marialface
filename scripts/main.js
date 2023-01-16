function navToggle() {
    document.getElementById("iham").classList.toggle("hidden");
    document.getElementById("icross").classList.toggle("hidden");
    let navMenu = document.getElementById("navMenu");
    if (window.innerWidth > 767 && navMenu.classList.contains("hidden")){
        navMenu.classList.replace("hidden", "animate__fadeInLeft");
    } else if (navMenu.classList.contains("hidden")) {
        navMenu.classList.replace("hidden", "animate__fadeInDown");
    } else {
        navMenu.classList.replace("animate__fadeInDown", "hidden");
        navMenu.classList.replace("animate__fadeInLeft", "hidden");
    }
}


function navInsert() {
    //let navHtml = '<nav><div class="innerNav"><a id="logo" href="/index.html"><i id="logo" class="fa-brands fa-pagelines"></i></a><button id="hamburger" class="btn" onclick="navToggle()"><i id="iham" class="fa-solid fa-bars"></i><i id="icross" class="fa-solid fa-xmark hidden"></i></button></div><div id="navMenu" class="animate__animated hidden"><a href="#">ABCulinária</a><a href="#">Perguntas Frequentes</a><a href="#">Receitas</a></div></nav>';
    let navHtml = '<nav><div class="innerNav"><a id="logo" href="/index.html"><i id="logo" class="fa-brands fa-pagelines"></i></a><button id="hamburger" class="btn" onclick="navToggle()"><i id="iham" class="fa-solid fa-bars"></i><i id="icross" class="fa-solid fa-xmark hidden"></i></button></div><ul id="navMenu" class="animate__animated hidden"><li><a href="#">ABCulinária</a></li><li><a href="#">Perguntas Frequentes</a></li><li><a href="#">Receitas</a></li></ul></nav>';
    document.body.innerHTML = navHtml + document.body.innerHTML;
}

function footerInsert() {
    let footerHtml = '<footer class="row"><h2>Contacto</h2><p><strong>Email:</strong> mariiagomes01@hotmail.com</p></footer>';
    document.querySelector("main").innerHTML += footerHtml;
}

// RUN
navInsert();
footerInsert();