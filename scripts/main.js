function navToggle() {
    document.getElementById("iham").classList.toggle("hidden");
    document.getElementById("icross").classList.toggle("hidden");
    let navMenu = document.getElementById("navMenu");
    navMenu.classList.replace("animate__fadeOutUp", "hidden");
    navMenu.classList.replace("animate__fadeOutLeft", "hidden");
    if (window.innerWidth > 767 && navMenu.classList.contains("hidden")) {
        navMenu.classList.replace("hidden", "animate__fadeInLeft");
    } else if (navMenu.classList.contains("hidden")) {
        navMenu.classList.replace("hidden", "animate__fadeInDown");
    } else {
        navMenu.classList.replace("animate__fadeInDown", "animate__fadeOutUp");
        navMenu.classList.replace("animate__fadeInLeft", "animate__fadeOutLeft");
    }
}

function navInsert() {
    let navHtml = '<nav><div class="innerNav"><a id="logo" href="/index.html"><i id="logo" class="fa-brands fa-pagelines"></i></a><button id="hamburger" class="btn" onclick="navToggle()"><i id="iham" class="fa-solid fa-bars"></i><i id="icross" class="fa-solid fa-xmark hidden"></i></button></div><ul id="navMenu" class="animate__animated hidden"><li><a href="/pages/ABCulinaria/ABCulinaria.html">ABCulinária</a></li><li><a href="#">Perguntas Frequentes</a></li><li><a href="#">Receitas</a></li></ul></nav>';
    document.body.innerHTML = navHtml + document.body.innerHTML;
}

function footerInsert() {
    let footerHtml = '<footer class="row"><h2>Contacto</h2><p><strong>Email:</strong> mariiagomes01@hotmail.com</p></footer>';
    document.querySelector("main").innerHTML += footerHtml;
}

function headerInsert() {
    let bootstrapcss = '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"crossorigin="anonymous">';
    let bootstrapjs = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>';
    let fontawesome = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
    let animatecss = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" />';
    //let maincss = '<link rel="stylesheet" href="/styles/main.css">';
    document.querySelector("head").innerHTML = bootstrapcss + fontawesome + animatecss /*+ maincss*/ + document.querySelector("head").innerHTML;
    document.body.innerHTML += bootstrapjs;
}

// RUN
headerInsert();
navInsert();
footerInsert();