let text = document.getElementById("content");
let p = document.getElementsByClassName("pnnP");
let input = document.getElementById("text");
let form = document.getElementById("form");
text.innerText = "text";


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let h = input.value;
    if (h > p.length-1 || h != Math.floor(h) || h < 0) {
        alert("erreur");
    }
    p[h].style.color = "black";
    if (p[h].style.color = "black") {
        text.innerText = p[h].innerText.toLowerCase() + " " + "content";
    }
    for (let i = 0; i < p.length; i++) {
        if (p[i] != p[h]) {
            p[i].style.color = "#CCCCCC";
        }
    }
    input.value = "";
});


for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("click", () => {
        for (let y = 0; y < p.length; y++) {
            p[y].style.color = "#CCCCCC";
        }
        p[i].style.color = "black";
        if (p[i].style.color = "black") {
            text.innerText = p[i].innerText.toLowerCase() + " " + "content";
        }
    });
}