const imgw = 500;
const imgh = 400;

function resized()
{
    let mapimg = document.getElementById("mapimg");
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    mapimg.style.width = (Math.floor(vw / imgw) * imgw).toString + "px";
    mapimg.style.height = (Math.floor(vw / imgh) * imgh).toString + "px";

    console.log(vw);
    console.log(Math.floor(vw / imgw) * imgw);
}

addEventListener("resize", (event) => {resized();})
resized();