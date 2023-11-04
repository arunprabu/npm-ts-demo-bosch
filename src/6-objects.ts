// Objects -- implicit type 
var profile = {
  name: "Arun",
  role: "Trainer",
  skills: ["react", "ts", "angular", "node"]
}

// profile = true; // error

// profile = {
//   exp: 12 // error
// }

// profile.exp = 12; // error -- only known properties can be set values 
profile.skills = ["Express", "MongoDB"]; // will work
profile.name = "John"; // will work