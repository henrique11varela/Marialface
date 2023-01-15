function navToggle() {
    document.getElementById("iham").classList.toggle("hidden");
    document.getElementById("icross").classList.toggle("hidden");
    document.querySelector("nav ul").classList.toggle("hidden");
}


function navInsert() {
    let navHtml = '<nav class=""><a id="logo" href="/index.html"><i id="logo" class="fa-brands fa-pagelines"></i></a><button id="hamburger" class="btn" onclick="navToggle()"><i id="iham" class="fa-solid fa-bars"></i><i id="icross" class="fa-solid fa-xmark hidden"></i></button><ul id="navMenu" class="hidden"><li><a href="#">ABCulinária</a></li><li><a href="#">Perguntas Frequentes</a></li><li><a href="#">Receitas</a></li></ul></nav>';
    document.body.innerHTML = navHtml + document.body.innerHTML;
}

function footerInsert() {
    let footerHtml = '<footer class="row"><h2>Contacto</h2><p><strong>Email:</strong> mariiagomes01@hotmail.com</p></footer>';
    document.querySelector("main").innerHTML += footerHtml;
}

// RUN
//navInsert();
footerInsert();