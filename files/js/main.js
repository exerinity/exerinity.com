/*
The code here is pretty bad... good luck understanding it lol
*/

function welcome() {

    let welcomes = [
        { text: "welcome to "+window.location.hostname, lang: "English" },
        { text: "willkommen auf "+window.location.hostname, lang: "German" },
        { text: "ciao! benvenuto su "+window.location.hostname, lang: "Italian" },
        { text: "ようこそ、"+window.location.hostname +' へ', lang: "Japanese" },
        { text: "bienvenido a "+window.location.hostname, lang: "Spanish" },
        { text: "välkommen till "+window.location.hostname, lang: "Swedish" },
        { text: "g'day! welcome to "+window.location.hostname, lang: "Aussie" },
        { text: "haii!!! :33 haiii ^_^ hewwo!!1!1! >////<", lang: "terminally online" },
        { text: "console.log('Hello World!');", lang: "JavaScript"}
    ];

    let chosen = welcomes[Math.floor(Math.random() * welcomes.length)];
    let el = document.getElementById("welcome");

    el.innerHTML = chosen.text.toLocaleLowerCase() + ' <img draggable="false" class="emoji" alt="👋" src="https://twemoji.exerinity.com/72x72/1f44b.png">';
    el.title = chosen.lang;
}

welcome();
document.getElementById("welcome").addEventListener("click", welcome);

let clickz = 0;
let timer;

document.getElementById("exe").addEventListener("click", () => {
    clickz++;
    clearTimeout(timer);
    timer = setTimeout(() => {
        clickz = 0;
    }, 500);

    if (clickz >= 3) {
        clickz = 0;
        shoot(20);

        document.body.classList.add("shake");
        setTimeout(() => {
            document.body.classList.remove("shake");
        }, 500);
    }
});

if (location.search.includes("com")) {
    document.getElementById("exe").innerHTML =
        `"+window.location.hostname <a href="https://ex3.lol">(back to ex3.lol)</a>`;
}