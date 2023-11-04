// Explicit Typing
// Custom Type a.k.a Type Aliases
type Profile = {
  name: string;
  phone: number | string; // union type -- Refer the next example
  address: string;
  email: string;
  city: string;
  exp?: number; // optional property
};

var profile1: Profile = {
  name: "Arun",
  phone: 13245677,
  address: "Door #5, Wall street",
  email: "a@b.com",
  city: "Chennai",
};

var profile2: Profile = {
  name: "John",
  phone: "768902435677",
  address: "Door #10, Wall street",
  email: "j@k.com",
  city: "Chennai",
  exp: 17,
};
