// let shoppinglist = ["Milk", "bread", "EGGS"];

// shoppinglist.push("Butter");
// console.log(shoppinglist);

// let employees = ["Lethabo", "Siya", "Solomon"];
// employees.pop();
// console.log(employees)

// let priceList = [19.2, 12, 16];

let cities = ["JHB", "Capetown", "DBN"];
cities.shift(); //used to remve the item at the top, here we removed JHB
cities.unshift("Pretoria");//used to add an Item at the top, here we added PTA
cities.pop(); // removes the last item on the list

if (cities.includes("DBN")) {
  console.log("The city is recorded in here!!!");
} else {
  console.log("City not Recognizes");
}
