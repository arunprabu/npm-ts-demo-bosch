// var car1 = {
//   make: "BMW",
//   model: "2 Series Gran Coupe",
//   colors: ["red", "green"],
//   priceRange: "46.53 - 49.00 lakh",
//   engine: "1995cc"
// };

// var car2 = {
//   make: "BMW",
//   model: "X1",
//   colors: ["red", "blue", "white"],
//   priceRange: "53.17 - 60.21 lakh",
//   engine: "1499cc - 1995cc"
// };

class Car {
  // public variable
  public make: string;
  model: string; // public keyword is optional

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

var myCar1: Car = new Car("BMW", "2 Series Gran Coupe");
console.log(myCar1);
/* output:
myCar1 = {
  make: "BMW",
  model: "2 Series Gran Coupe"
}
*/

var myCar2: Car = new Car("BMW", "X1");
console.log(myCar2);
/* output:
myCar2 = {
  make: "BMW",
  model: "X1"
}
*/