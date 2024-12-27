// not the actual size of the image, these variables just have to be
// representative of the aspect ratio
const imgw = 5;
const imgh = 4;
let debug = true; // this value is meant to be modified only from debug console to enable goofy things

function resized(event)
{
    let active = document.getElementById("active");
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    active.style.width = (Math.min(vw / imgw, vh / imgh) * imgw).toString() + "px";
    active.style.height = (Math.min(vw / imgw, vh / imgh) * imgh).toString() + "px";
}

function round(n, d)
{
    // such a js moment lmao
    return Math.round(n * (10 ** d)) / (10 ** d);
}

const ROUNDAMT = 1
function to_wperc(clientx)
{
    let active = document.getElementById("active");
    let activew = active.style.width
    if (activew.endsWith("px"))
    {
        activew = parseInt(activew.slice(0, -2));
    }
    else
    {
        throw new Error("Non-px #active <div> width");
    }

    return round((100 / activew) * (clientx - active.offsetLeft), ROUNDAMT).toString() + "%";
}

function to_hperc(clienty)
{
    let active = document.getElementById("active");
    let activeh = active.style.height
    if (activeh.endsWith("px"))
    {
        activeh = parseInt(activeh.slice(0, -2));
    }
    else
    {
        throw new Error("Non-px #active <div> height");
    }

    return round((100 / activeh) * (clienty - active.offsetTop), ROUNDAMT).toString() + "%";
}

function debug_event(event)
{
    if (debug)
    {
        let dot = document.getElementById("dot")
        dot.style.left = to_wperc(event.clientX);
        dot.style.top = to_hperc(event.clientY);
    }
}

function click_debug_event(event)
{
    if (debug)
    {
        console.log(to_wperc(event.clientX));
        console.log(to_hperc(event.clientY));
        console.log();
    }
}

addEventListener("resize", resized);
addEventListener("mousemove", debug_event);
addEventListener("mousedown", click_debug_event);
resized();