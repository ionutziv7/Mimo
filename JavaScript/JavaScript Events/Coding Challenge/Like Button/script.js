var img = document.querySelector("button");
img.ondblclick = like;


function like() {
    document.querySelector("p").innerHTML = "Liked";
}