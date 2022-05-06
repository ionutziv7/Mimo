var input = document.querySelector("input");
input.onchange = qtyChanged;

function qtyChanged() {
    document.querySelector("p").innerHTML = "Total Price: $" + (Number(input.value) * 1.99);
}