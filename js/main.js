// not the actual size of the image, these variables just have to be
// representative of the aspect ratio
const imgw = 5;
const imgh = 4;

function resized(event)
{
    let active = document.getElementById("active");
    // 0.85 is 1-15%, from sidebar css
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.9;
    let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.9;

    active.style.width = (Math.min(vw / imgw, vh / imgh) * imgw).toString() + "px";
    active.style.height = (Math.min(vw / imgw, vh / imgh) * imgh).toString() + "px";
}

const idmap = {
    eiffel: "La Tour Eiffel",
    triomphe: "L'Arc de Triomphe de l'Étoile",
    coeur: "La Basilique du Sacré-Cœur",
    notredame: "La Cathédrale Notre-Dame de Paris",
    moulin: "Le Moulin-Rouge",
    invalides: "L'Hôtel des Invalides",
    palais: "Le Palais Garnier",
    pantheon: "Le Panthéon de Paris",
    lyon: "La Gare de Lyon"
}

function clicked(event) {
    let sidebar = document.getElementById("sidebar");
    let title = document.getElementById("sbtitle");

    sidebar.classList.remove("righttransition");
    sidebar.style.right = "-25%";
    document.body.offsetHeight; // chat I know this looks fucked but it's to trigger a reflow...

    let newtitle = idmap[event.currentTarget.id];
    if (newtitle === undefined) {
        throw new Error("CSS ID nonexistent in idmap");
    }
    title.innerHTML = newtitle;

    sidebar.classList.add("righttransition"); // <-- ...so this stuff actually transitions
    sidebar.style.right = "0px";
}

function xclicked(event) {
    let sidebar = document.getElementById("sidebar");

    sidebar.classList.add("righttransition");
    sidebar.style.right = "-25%";
    document.body.offsetHeight; // chat I know this looks fucked but it's to trigger a reflow...
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