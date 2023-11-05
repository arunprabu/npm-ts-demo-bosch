// Interface
interface IEmployee {
  name: string;
  phone: number;
  address: string;
  email: string;
  city: string;
  exp?: number; // optional property
}

var employee1: IEmployee = {
  name: "Arun",
  phone: 13245677,
  address: "Door #5, Wall street",
  email: "a@b.com",
  city: "Chennai",
};

var employee2: IEmployee = {
  name: "John",
  phone: 768902435677,
  address: "Door #10, Wall street",
  email: "j@k.com",
  city: "Chennai",
  exp: 17,
};
