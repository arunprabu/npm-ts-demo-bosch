// Generics
type Person<T> = {
  name: string;
  msg: T;
};

const person1: Person<string> = {
  name: "John",
  msg: "Twenty",
};

const person2: Person<number> = {
  name: "Steve",
  msg: 30,
};

const person3: Person<boolean> = {
  name: "Steve",
  msg: true,
};

const person4: Person<string[]> = {
  name: "Steve",
  msg: ["wow", "random"],
};
