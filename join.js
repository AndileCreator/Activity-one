// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).

let cars = [
    {carType: "SUV", brand: "BMW", yearMade: 2026},
    {carType: "Bakkie", brand: "Toyota", yearMade:1900},
    {carType: "Hatch", brand:"Yamaha", yearMade:2022}
]

console.log(cars[1].brand)

let totCost= (price, quantity) => {
    return price * quantity;
}
console.log(totCost(34,23))