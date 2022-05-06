function changeColor() {
    item.classList.toggle("gold");
}
var item = document.querySelector("div");
item.ondblclick = changeColor;

function changeOnScroll() {
    textarea.style.backgroundColor = "green";
}
var textarea = document.querySelector('textarea');
textarea.onscroll = changeOnScroll;

function updateValue() {
    log.innerText = input.value;
}
var input = document.querySelector('input');
var log = document.getElementById('log'); 
input.onchange = updateValue;

function updateWords() {
    typing.innerText = wordsCount.value.length;
}
var wordsCount = document.querySelector("#wordsCount");
var typing = document.getElementById('typing');
wordsCount.oninput = updateWords;

function updateVal() {
    log2.innerText = input2.value;
}
var input2 = document.querySelector('.range');
var log2 = document.getElementById('log2');
input2.oninput = updateVal;