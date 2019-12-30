function toggleNav() {
    var stat = document.getElementById("mobile_menu").style.height;
if (stat ==  "70%") {
    closeNav();
} else {
    openNav();
}
}

function openNav() {
    document.getElementById("mobile_menu").style.height = "70%";
}

function closeNav() {
    document.getElementById("mobile_menu").style.height = "0";
}

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 20) {
        document.getElementById("nav").style.boxShadow = "0px 0px 5px";
    }
    else {
        document.getElementById("nav").style.boxShadow = "";
    }
}
myFunction()