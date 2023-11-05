// Base class
class Vehicle {
  fuel: string = "Petrol";
  protected mileage = "20kmpl";

  drive() {
    console.log("Driving a Vehicle");
  }
}

// derived class
class Bus extends Vehicle {
  make!: string;

  // if derived class wants to have constructor -- you must call super()
  // only then, this keyword will be available in derived class
  constructor(make: string) {
    super();
    this.make = make;
  }

  // what if derived wants to have drive method
  drive(): void {
    this.make = "Driving a Bus";
    console.log(this.make);
    super.drive(); // calling base class's derive method
    this.mileage; // protected variables will be accessible within base and derived classes only
  }
}

const myBus1: Bus = new Bus("Volvo");
console.log(myBus1);

// all public variables will be available within both classes and also in th object
// all private variables will be available within class and NOT in the object
// all protected variables will be available within both classes and NOT in the object
