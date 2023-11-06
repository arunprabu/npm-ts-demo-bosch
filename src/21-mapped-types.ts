type NullablePerson<T> = {
  [K in keyof T]: T[K] | null; // some dev will K -- for Key 
};

interface Person {
  name: string;
  age: number;
}

type NullableResult = NullablePerson<Person>;

const person: NullableResult = {
  name: 'John', // this is not optional but nullable
  age: null // this is not optional but nullable
};