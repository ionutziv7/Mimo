var button  = document.querySelector("button");
button.onclick = clicked;

function clicked() {
    var phrase = document.querySelector("#phrase");
    phrase.innerText = "Button Clicked!";
}