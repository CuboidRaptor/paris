// not the actual size of the image, these variables just have to be
// representative of the aspect ratio
const imgw = 5;
const imgh = 4;

function resized()
{
    let active = document.getElementById("active");
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    active.style.width = (Math.min(vw / imgw, vh / imgh) * imgw).toString() + "px";
    active.style.height = (Math.min(vw / imgw, vh / imgh) * imgh).toString() + "px";
}

addEventListener("resize", (event) => {resized();})
resized();