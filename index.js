//sigh*
//getting the modal working
//unfortunately the modal didn't work...so sad

//trying a preloader

const loader = document.querySelector("#preloader");

window.addEventListener("load", () => {
    loader.style.display = "none";
    loader.style.visibility = "hidden";
    loader.style.opacity = "0";
})