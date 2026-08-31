//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Merge two sorted arrays
 
*/
// let arr1 = [2, 4, 8, 10];
// let arr2 = [1, 3, 5, 6, 9];
// let arr3 = [];
// let i = 0,
//   j = 0,
//   k = 0;
// let cnt = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     arr3[k++] = arr1[i++];
//   } else {
//     arr3[k++] = arr2[j++];
//   }
// }

// if (i < arr1.length) {
//   while (i < arr1.length) {
//     arr3[k++] = arr1[i++];
//   }
// }

// if (j < arr2.length) {
//   while (j < arr2.length) {
//     arr3[k++] = arr2[j++];
//   }
// }

// console.log(arr3);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Q Remove the duplicate elements in the sorted array in place
 
*/
// let arr = [4, 5, 5, 6, 7, 7, 7, 8];
// let i = 0,
//   j = 1;

// while (i < arr.length && j < arr.length) {
//   while (arr[i] == arr[j] && j < arr.length) {
//     j++;
//   }
//   if (j < arr.length) {
//     arr[i + 1] = arr[j];
//     i++;
//     j++;
//   }
// }
// console.log("value of i is: " + ++i);
// console.log(arr);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Duplicate zeros: 
add one more zero next to zero
 
*/
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0 && i < arr.length - 1) {
//     let j = arr.length - 1;
//     while (j > i + 1) {
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     arr[++i] = 0;
//   }
// }
let arr = [0, 1, 2, 0, 4, 0];

let zero_count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) zero_count++;
}
for (
  let i = arr.length - 1, j = arr.length - 1 + zero_count;
  i != j;
  i--, j--
) {
  if (j < arr.length) {
    arr[j] = arr[i];
    if (arr[i] == 0) {
      arr[--j] = arr[i];
    }
  } else if (arr[i] == 0) {
    j--;
  }
}
console.log(arr);
