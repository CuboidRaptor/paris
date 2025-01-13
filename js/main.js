// not the actual size of the image, these variables just have to be
// representative of the aspect ratio
const imgw = 5;
const imgh = 4;
// const gdata impmorted from data.js

function resized(event)
{
    let active = document.getElementById("active");
    // 0.85 is 1-15%, from sidebar css
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.9;
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.9;

    active.style.width = (Math.min(vw / imgw, vh / imgh) * imgw).toString() + "px";
    active.style.height = (Math.min(vw / imgw, vh / imgh) * imgh).toString() + "px";
}

function clicked(event) {
    let curid = event.currentTarget.id;
    let sidebar = document.getElementById("sidebar");
    let title = document.getElementById("sbtitle");
    let text = document.getElementById("sbtext");
    let photo = document.getElementById("sbimg");

    sidebar.classList.remove("righttransition");
    sidebar.style.right = "-25%";
    document.body.offsetHeight; // chat I know this looks fucked but it's to trigger a reflow

    let newtitle = gdata.idtitles[curid];
    if (newtitle === undefined) {
        throw new Error("CSS ID nonexistent in idtitles map");
    }
    title.innerHTML = newtitle;

    let newtext = gdata.blurbs[curid];
    if (newtext === undefined) {
        throw new Error("CSS ID nonexistent in blurbs map");
    }
    text.innerHTML = newtext;

    photo.src = "";
    photo.src = `../img/photos/${curid}.png`;
    photo.title = newtitle;

    sidebar.classList.add("righttransition");
    sidebar.style.right = "0px";
}

function xclicked(event) {
    let sidebar = document.getElementById("sidebar");

    sidebar.classList.add("righttransition");
    sidebar.style.right = "-25%";
}

let iconelements = document.getElementsByClassName("icon");

for (let i = 0; i < iconelements.length; i++) {
    let elem = iconelements.item(i);

    let arrowimg = document.createElement("img"); // add arrow
    arrowimg.src = "img/arrow.png";
    arrowimg.classList.add("arrow");
    elem.appendChild(arrowimg);

    elem.addEventListener("click", clicked)
}

addEventListener("resize", resized);
resized();

document.getElementById("xbutton").addEventListener("click", xclicked)