function displayItem() {
    var el = document.getElementsByTagName("li");
    console.log(el.length);
}

function displayTasks() {
    var el = document.getElementsByClassName("urgent important");
    console.log(el.length);
}

function updateHeadings() {
    var el = document.getElementsByClassName("adventure comedy");
    el[0].innerHTML = "Dumb and Dumber";
}