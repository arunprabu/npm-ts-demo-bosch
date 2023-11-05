// var car1 = {
//   make: "BMW",
//   model: "2 Series Gran Coupe",
//   colors: ["red", "green"],
//   priceRange: "46.53 - 49.00 lakh",
//   engine: "1995cc"
// };

// var car2 = {
//   make: "Benz",
//   model: "GLA",
//   colors: ["red", "blue", "white"],
//   priceRange: "53.17 - 60.21 lakh",
//   engine: "1499cc - 1995cc"
// };

class Car {
  // public variable -- public keyword is optional
  public make: string;
  model: string;

  // private variable
  private fuel: string = "Petrol";

  constructor(_make: string, _model: string) {
    // receive constructor param
    this.make = _make;
    this.model = _model;
  }

  // public method  -- public keyword is optional
  getCarInfo(): void {
    // locally-scope private variables
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(`You are seeing details of ${this.make} ${this.model}`);
    console.log(this.getMileage());
  }

  // private method
  private getMileage(): string {
    return "20kmpl";
  }
}

const myCar1: Car = new Car("BMW", "2 Series Gran Coupe"); // constructor param
// console.log(myCar1);
myCar1.getCarInfo();

const myCar2: Car = new Car("Benz", "GLA"); // constructor param
// console.log(myCar2);
myCar2.getCarInfo();