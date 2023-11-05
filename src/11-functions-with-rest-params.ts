// Functions with REST PARAMS

function multiply(a: number, b: number, ...z: number[]){
  console.log(a);
  console.log(b);
  console.log(z);
}

multiply(10, 20);
multiply(10, 20, 30);
multiply(10, 20, 30, 40);
multiply(10, 20, 30, 40, 50, 60, 70);