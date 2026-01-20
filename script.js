let p = document.querySelector("p");
let text = p.innerText;

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iterator = 0;

function randomText() {
    let str = text.split("").map(function (char, index) {
        if (index < iterator) {
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * 52)]
    }).join("");

    p.innerText = str;

    iterator += 0.2;
}

setInterval(randomText, 30)
