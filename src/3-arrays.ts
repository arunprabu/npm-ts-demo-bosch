// Arrays = group of similar data 
var colors = ["red", "green", "blue"]; // implicit 
colors[3] = "yellow"; // valid 
// colors[4] = 34256; // error

// Syntax #1
var myColors: string[] = ["red", "green", "blue"]; // explicit typing

// Syntax #2
var alternateColors: Array<string> = ["purple", "pink", "gold"]; // explicit typing

// What if you want array with mixed data type? -- work with any array
var randomList1 = ["a", "b", 10, 20, true, {}, []]; 
var randomList2: any[] = ["a", "b", 10, 20, true, {}, []]; 
var randomList3: Array<any> = ["a", "b", 10, 20, true, {}, []]; 