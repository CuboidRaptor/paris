// not the actual size of the image, these variables just have to be
// representative of the aspect ratio
const imgw = 5;
const imgh = 4;

function resized(event)
{
    let active = document.getElementById("active");
    // 0.85 is 1-15%, from sidebar css
    let vw = Math.max((document.documentElement.clientWidth * 0.85) || 0, (window.innerWidth * 0.85) || 0) * 0.9;
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.9;

    active.style.width = (Math.min(vw / imgw, vh / imgh) * imgw).toString() + "px";
    active.style.height = (Math.min(vw / imgw, vh / imgh) * imgh).toString() + "px";
}

let iconelements = document.getElementsByClassName("icon");

for (let i = 0; i < iconelements.length; i++) {
    let elem = iconelements.item(i);

    let arrowimg = document.createElement("img"); // add arrow
    arrowimg.src = "img/arrow.png";
    arrowimg.classList.add("arrow");
    elem.appendChild(arrowimg);

    elem.addEventListener("click", (event) => {console.log(event.currentTarget.id);})
}

addEventListener("resize", resized);
resized();