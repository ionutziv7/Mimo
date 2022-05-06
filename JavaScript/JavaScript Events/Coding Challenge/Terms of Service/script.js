var terms = document.getElementsByTagName("textarea")[0];
terms.onscroll = checkReading;

function checkReading() {
    var read = terms.scrollHeight - Math.round(terms.scrollTop) === terms.clickedHeight;
    if(read) {
        document.getElementsByTagName("p")[0].innerHTML = "Thank You";
    }
}