// let names = ["Alice", "Bob", "Charlie", "David", "Eve"];

let nums = [1, 2, 3, 4, 5];

// toString() : method will convert array to string with , as the seperator
// let stringNames = names.toString();

//join() : method will convert array to string with a seoperator of our choice
// let stringNames = names.join(" and ");

//concat(): method will merge two or more arrays
// let joinNames = names.concat(names2);

//splice() : add/remove iteems to/from an array, and returns the removed items
// names.splice(1, 2, "Bill");

//slice() : retrurns a shallow copy of a portion of the array
// let sliced = names.slice(1, 3);

//indexOf() : method returns the first index of the value in the array
// let i = names.indexOf("Bob");

//lastIndexOf(): method returns the last index of the value in the array
// let i = names.lastIndexOf("Bob");

//flat() : converts nested list into a new 1D array.
// let flat = names.flat(2);

//forEach(): method executes a provided function by iterating through each element in the array
// names.forEach((name) => {
//   console.log(name[0]);
// });

//map(): creates a new array by applying a function on each element of another array
// let triple = nums.map((num) => {
//   return num * 3;
// });

//filter(): Filter an array of objects based on a particular parameter or condition
let posts = [
  { title: "post 1", author: "Alice" },
  { title: "post 2", author: "Maria" },
  { title: "post 3", author: "Alice" },
];

// let newPosts = posts.filter((post) => {
//   return post.author === "Alice";
// });

// newPosts.forEach((post) => {
//   console.log("Title: " + post.title);
// });

//reduce(): reduce the elements in an array into a single value using some operation
// let s = nums.reduce((total, num) => total + num);
// console.log(s);

// let maxVal = nums.reduce((a, b) => Math.min(a, b), Infinity);
// console.log(maxVal);

//some():return true or false depending on the condition satisfied by the array or not(atleast one elmeent should satisfy)
// let someVal = nums.some((num) => num < -1);

//every(): all elemtns should satisfy the given condition
// let everyVal = nums.every((num) => num < 6);

//find(): method returns the value of the first element in the array that satisfies the provided testing function
// let hehePost = posts.find((post) => {
//   return post.author === "Maria";
// });

//sort(): sort the given array
nums.sort((a, b) => b - a);

console.log(nums);
