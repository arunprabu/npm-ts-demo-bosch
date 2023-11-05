// Functions 

function add(a: number, b: number, c?: number): number {
  console.log(a);
  console.log(b);
  console.log(c);
  if(typeof c === 'undefined'){
    return a + b; 
  } else {
    return a + b + c; 
  }
}

const output: number = add(10, 20);
console.log(output);

