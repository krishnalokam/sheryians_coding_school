let prompt = require("prompt-sync")();

/* 
Problem 1:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/
// let n = Number(prompt("Enter the loop counter: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

/* 
Problem 2: Right angled triangle
* 
* * 
* * * 
* * * * 
* * * * *

*/
// let n = Number(prompt("Enter the loop counter: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
/* 
Problem 3: Right angled triangle
1 
1 2  
1 2 3
1 3 3 4
1 2 3 4 5
*/

// let n = Number(prompt("Enter the loop counter: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

/* 
Problem 4: Right angled triangle
A 
A B
A B C
A B C D
A B C D E
*/
// let n = Number(prompt("Enter the loop counter: "));
// for (let i = 1; i <= n; i++) {
//   let chaCode = 65;
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(chaCode++) + " ");
//   }
//   console.log();
// }

/* 
Problem 5: Inverted Right angled triangle

* * * * *
* * * * 
* * *
* 

*/
// let n = Number(prompt("Enter the loop counter: "));
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
/* 
Problem 6: Mirror right angled triangle
          *
        * *
      * * *
    * * * *
  * * * * *
*/
// let n = Number(prompt("Enter the loop counter: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

/* 
Problem 7: Mirror right angled triangle
     * 
   * * 
  * * * 
 * * * * 
* * * * * 
*/
// let n = Number(prompt("Enter the loop counter: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

/* 
Problem 8: Print X shape
    
*/
// let n = Number(prompt("Enter the loop counter: "));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

/* 
Problem 9: Print V shape
    
*/
// let n = Number(prompt("Enter the loop counter: "));
// let cols = 2 * n - 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 1; j <= cols - i; j++) {
//     if (j == i + 1 || j == cols - i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }
