type MakeEverythingOptional<T> = {
  [Property in keyof T]?: T[Property];

  // in the above T = User
  // keyof T = name, age -- Not looped thru yet
  // then 'in' is like 'for in loop'
  // So, 'Property in keyof T' = name, age
  // T[Property] = User[name]; // string
  // T[Property] = User[age]; // number
  // ? is making it optional
};

interface User {
  name: string;
  age: number;
}

type OptionalUser = MakeEverythingOptional<User>;

const myProfile: OptionalUser = {
  name: "John",
};


/*
    OptionalUser will be:

    {
      name?: string;
      age?: number; 
    }
  */
