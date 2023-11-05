// Arrow Functions

// const greet1 = (firstName: string, lastName: string): string => {
//   return "Hi " + firstName + lastName;
// }
// the above can be simplified in the following way
const greet1 = (firstName: string, lastName: string): string => "Hi " + firstName + lastName;

// const greet2 = (): string => {
//   return "Hi";
// }
// the above can be simplified in the following way
const greet2 = (): string => 'Hi';

const greeting = greet2();
console.log(greeting);