// Enums usually preferred to have constants
enum MyContactNumbers {
  Personal = 4356788679, // can hold numbers 
  Official1 = 5467890789,
  Official2 = 9875643234
}

var myPersonalNumber = MyContactNumbers.Personal; // we can use it. but can't reset 
// myContactNumbers.personal = 2456789; // error

enum ErrorCodes {
  INVALID_USERNAME = 1001,
  INVALID_PASSWORD = 1002,
  EMAIL_NOT_VERIFIED = 1003,
  ACCESS_DENIED, // this will have the value 1004
  ACCOUNT_DISABLED // this will have the value 1005
}

console.log(ErrorCodes.ACCOUNT_DISABLED); // 1005

// string enums 
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
