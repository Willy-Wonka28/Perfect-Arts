//sigh*
//getting the modal working

let popUpText = [
    "Charcoal x graphite on pelican paper", "16x20", "Unframed",
    "Framed", "A4 Sized", "Digital Art", ""
];

const modal = document.querySelector("#modal");
const art = document.querySelector("#art");
const materials = document.querySelector("#materials");
const specs = document.querySelector("#specs");
const witch = document.querySelector(".witch");
const zenitsu = document.querySelector(".zenitsu");
const satoru = document.querySelector(".satoru");
const eye = document.querySelector(".eye");
const mal = document.querySelector(".maleficent");
const lion = document.querySelector(".lion");
const hand = document.querySelector(".hand");
const spider = document.querySelector(".spiderman");
const oil = document.querySelector(".oil");
const sukuna = document.querySelector(".sukuna");
const but1 = document.querySelector(".but1");
const side1 = document.querySelector(".side1");
const side2 = document.querySelector(".side2");

witch.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[1];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

zenitsu.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[5];
    materials.innerHTML = popUpText[6];
    specs.innerHTML = popUpText[6];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

satoru.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[5];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

eye.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[4];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

mal.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[1];
    specs.innerHTML = popUpText[3];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

lion.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[5];
    materials.innerHTML = popUpText[6];
    specs.innerHTML = popUpText[6];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

hand.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[5];
    materials.innerHTML = popUpText[6];
    specs.innerHTML = popUpText[6];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

spider.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[4];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

oil.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[4];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

sukuna.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[5];
    materials.innerHTML = popUpText[6];
    specs.innerHTML = popUpText[6];


    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

but1.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[1];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

side1.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[4];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

side2.addEventListener("click", () => {
    const popUpImage = document.querySelector(".dynamic-image");
    const imageUrl = event.target.src;
    popUpImage.src = imageUrl;
    art.innerHTML = popUpText[0];
    materials.innerHTML = popUpText[4];
    specs.innerHTML = popUpText[2];

    modal.style.visibility = "visible";
    modal.style.height = "650px";
    modal.style.width = "750px";
    modal.style.padding= "0px"
    modal.showModal();
})

document.querySelector(".close").addEventListener("click", () => {
    modal.style.visibility = "hidden";
    modal.style.height = "0px";
    modal.style.width = "0px";
    modal.style.padding= "0px"
    modal.close();
})