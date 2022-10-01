// Preloader function
let preloader = document.getElementById("preloader");
window.addEventListener(`load`, function () {
    preloader.style.display = "none";
});
// Date function
function day() {
    let d = new Date();
    let mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    let time = document.getElementById("time");
    time.innerText = `${da} : ${mo}`;
}
day();
// Popup Search bar
function showbar() {
    let sr = document.getElementById("bar");
    let main = document.querySelector(".search");
    if (sr.style.display === "none") {
        sr.style.display = "flex";
        sr.style.transform = "translateY(15px)";
        main.style.color = "#f00";
    } else {
        sr.style.display = "none";
        main.style.color = "#fff";
    }
}
// Nav Bar
function showNavMenu() {
    let navBar = document.getElementById("menu");
    let iconBar = document.querySelector(`.icon-bar`);
    if (navBar.style.display === "none") {
        navBar.style.display = "flex";
        iconBar.style.color = "#f03232";
        console.log("done");
    } else {
        navBar.style.display = "none";
        iconBar.style.color = "#fff";
        console.log("shit");
    }
}
// Slider Function
let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
