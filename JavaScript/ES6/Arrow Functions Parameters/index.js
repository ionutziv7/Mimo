/*const getPrice = (total) =>  {
    const discount = 0.10;
    return total - (discount * total);
}
console.log(getPrice(500));
*/

/*const getPrice = total => {
    const discount = 0.10;
    return total - (discount * total);
}
console.log(getPrice(500));
*/

const getPrice = (total = 25, discount = 3) => total - (discount / 100 * total);
console.log(getPrice());

const getRatio = (nom, denom = 2) => {
    return nom / denom;
}
console.log(getRatio(40,4));

const getSquare = (number = 0) => number * number;
console.log(getSquare(5));

const getArea = (length, width = 3) => length * width;
console.log(getArea(5));

