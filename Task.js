"use strict;";
/*
⁑ What will be the result and why?
  1. "" + 1 + 0          8. "4" - 2       
  2. "" - 1 + 0          9. "4px" - 2
  3. true + false       10. 7 / 0
  4. 6 / "3"            11. " -9 " + 5
  5. "2" * "3"          12. " -9 " - 5
  6. 4 + 5 + "px"       13. null + 1
  7. "$" + 4 + 5        14.undefined + 1
*/
let a1 = "" + 1 + 0;
// console.log(a1);
// 10/   Explanation ➞ "" + 1 = "1" ➞ "1"+ 0 ➞ "10"
let a2 = "" - 1 + 0;
//console.log(a2);
// -1/   Explanation ➞ "" - 1 = 0 - 1 = -1 ➞ -1 + 0 ➞ -1
let a3 = true + false;
//console.log(a3);
// 1/    Explanation ➞ true = 1, false = 0, ➞ 1 + 0 ➞ 1
let a4 = 6 / "3";
//console.log(a4);
// 2/    Explanation ➞ 6 / "3" ➞ 6 / 3 ➞ 2
let a5 = "2" * "3";
//console.log(a5);
// 6/    Explanation ➞ "2" * "3" ➞ 2 * 3 ➞ 6
let a6 = 4 + 5 + "px";
//console.log(a6);
// 9px/  Explanation ➞ 4 + 5 = 9 ➞ 9 + "px" ➞ "9px"
let a7 = "$" + 4 + 5;
//console.log(a7);
// $45/  Explanation ➞ "$" + 4 = "$4" ➞ "$4" + 5 ➞ "$45"
let a8 = "4" - 2;
//console.log(a8);
// 2/    Explanation ➞ "4" - 2 = 4 - 2 ➞ 2
let a9 = "4px" - 2;
//console.log(a9);
// NaN/  Explanation ➞ 4px - 2 = 4px = NaN ➞ NaN - 2 ➞ NaN
let a10 = 7 / 0;
//console.log(a10); //Infinity/ -7 / 0 = -Infinity
let a11 = " -9 " + 5;
//console.log(a11);
// -9 5/ Explanation ➞ " -9 " + "5" ➞ " -9 5"
let a12 = " -9 " - 5;
//console.log(a12);
// -14/  Explanation ➞ -9 - 5 ➞ -14
let a13 = null + 1;
//console.log(a13);
// 1/    Explanation ➞ Number(null) = 0 ➞ 0 + 1 ➞ 1
let a14 = undefined + 1;
//console.log(a14);
// NaN/  Explanation ➞ Number(undefined) = NaN ➞ NaN + 1 ➞ NaN
