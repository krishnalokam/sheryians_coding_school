/*
Selection Sort

*/
/*
let arr = [8, 1, 0, 5, 5, 2, 3, 7, 8, 0];
let counter = 0;
for (let i = arr.length - 1; i > 0; i--) {
  let bigIndex = 0;

  for (let j = 0; j <= i; j++) {
    if (arr[j] > arr[bigIndex]) {
      bigIndex = j;
    }
  }

  [arr[i], arr[bigIndex]] = [arr[bigIndex], arr[i]];
  //   console.log(arr);
  //   if (++counter == 3) break;
}
console.log(arr);
*/
