// let map = new Map();
// map.set("ajay", 5);
// map.set("amit", 7);
// map.set("aman", 2);
// map.set("sakshi", 4);
// map.set("ajay", 2);

// console.log(map);
// console.log(map.get("sakshi"));
// map.delete("sakshi");
// console.log(map);
// console.log(map.has("aman"));
// console.log(map.size);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Q. Find the frequency of each element in the given array
 

let arr = [1, 2, 3, 4, 5, 1, 3, 6, 7, 3, 5, 3, 2, 7, 9];
let map = new Map();
for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
console.log(map);
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*

 
*/

const map = new Map();
map.set("1", "one");
map.set(1, "ONE");
console.log(map.size);
