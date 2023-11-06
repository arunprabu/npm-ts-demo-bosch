// Let's make the data readonly in bulk

  type MakeDataReadonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  interface User {
    name: string;
    age: number;
  }

  type ReadonlyUser = MakeDataReadonly<User>;

  let user1: ReadonlyUser = {
    name: 'John',
    age: 20
  };

  // user1.name = "Steve"; // This is read-only -- you can't modify it

