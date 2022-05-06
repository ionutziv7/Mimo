var input = document.querySelector("input");
var duck = document.querySelector("img");
var progress = 10;

input.onchange = win;
input.oninput = move;

function move() {
    var input = document.querySelector("input");
    duck.style.left = (input.value) + 'px';
}

function win() {
    var p = document.querySelector("p");
    var input = document.querySelector("input");
    if(Number(input.value) >=100) {
        p.innerHTML = "You Win!";
    }
    else {
        p.innerHTML = "";
    }
}
