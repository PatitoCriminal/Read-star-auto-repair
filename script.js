function showMessage() {
    let name = document.getElementById("name").value;

    if(name === "") {
        alert("Please enter your name.");
        return;
    }

    alert("Thank you " + name + "! We received your appointment request.");
}



function showMessage() {
    alert("Appointment request sent!");
}

window.onload = function () {

    const logo = document.getElementById("logo");
    const engineSound = document.getElementById("engineSound");

    logo.addEventListener("click", function () {

    engineSound.currentTime = 0;
    engineSound.volume = 0.8;
    engineSound.play();

    logo.classList.remove("engine-animation");

    void logo.offsetWidth;

    logo.classList.add("engine-animation");

});

};

let lastScrollTop = 0;

window.addEventListener("scroll", function() {

    let currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

    let header = document.getElementById("main-header");

    if (currentScroll > lastScrollTop) {

        header.style.top = "-200px";

    } else {

        header.style.top = "0";

    }

    lastScrollTop = currentScroll;
});

