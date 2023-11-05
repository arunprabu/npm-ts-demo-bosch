// Generic Function
function sayHi<T>(name: T) {
  return `Hi ${name}`;
}

const msg1 = sayHi<string>("John");
console.log(msg1);

const msg2 = sayHi<number>(12130);
console.log(msg2);

const msg3 = sayHi<boolean>(true);
console.log(msg3);
