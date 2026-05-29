/*
Toggle each alphabet of String;
*/

function problem1() {
  let s = "AcgDfD";
  let newString = "@";
  let ch = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      ch = s.charCodeAt(i) + 32;

      // mewString = newString.concat(String.fromCharCode(ch));
      newString += String.fromCharCode(ch);
      console.log("Inside A " + newString + " and ch " + ch);
    } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
      ch = s.charCodeAt(i) - 32;
      // mewString = newString.concat(String.fromCharCode(ch));
      newString += String.fromCharCode(ch);

      console.log("Inside a " + newString + " and ch " + ch);
    }
  }

  console.log(newString);
}
// problem1();

/**
 * Problem 2:
 * Take an array of words,and a prefix, find the no of words that has the given prefix as the word prefix
 * eg: arr = ["pay", "attention", "practice", "attend"]
 *  pf = "at";
 * output: 2, (which means attention and attend)
 */

function problem2() {
  let words = ["pay", "attention", "practice", "attend"];
  let pf = "at";
  let pf_length = pf.length;
  let result = 0;
  for (let word of words) {
    let cnt = 0;
    for (let i = 0; i < pf.length; i++) {
      if (pf.charAt(i) != word.charAt(i)) break;
      cnt++;
    }
    if (cnt == pf_length) result++;
  }
  return result;
}

// let ans2 = problem2();
// console.log(ans2);

/**
 * Problem3 : Captialize first and last character of each word in the given Sentence
 * eg: input: "Sheriyans Coding School";
 *     output: "SheryianS CodinG SchooL"
 */

function problem3() {
  let str = "Sheriyans Coding School";
  let words = str.split(" ");
  let result = [];
  for (let word of words) {
    let new_word =
      toUpperCase(word.charAt(0)) +
      word.slice(1, -1) +
      toUpperCase(word.slice(-1));
    result.push(new_word);
  }
  return result.join(" ");
}

function toUpperCase(str) {
  acii = str.charCodeAt(0);
  if (acii >= 97 && acii <= 122) {
    return String.fromCharCode(acii - 32);
  }
  return str;
}

// let ans3 = problem3();
// console.log(ans3);

/**
 * Reverse a string using inbuilt functions
 */

function problem4() {
  let str = "hello";
  return str.split("").reverse().join("");
}

// console.log(problem4());

/**
 * @param {string} str
 * @return {string}
 */
function capitalizeEnds(str) {
  let words = str.split(" ");
  let result = [];
  if (str.length == 1) {
    return captializeChar(str.charAt(0));
  } else if (str.length == 2) {
    return captializeChar(str.charAt(0)) + captializeChar(str.charAt(1));
  }
  for (let word of words) {
    first = captializeChar(word.charAt(0));
    mid = word.slice(1, -1);
    last = captializeChar(word.charAt(word.length - 1));
    result.push(first + mid + last);
  }
  return result.join(" ");
}

function captializeChar(str) {
  let ascii = str.charCodeAt(0);
  if (ascii >= 97 && ascii <= 122) {
    return String.fromCharCode(ascii - 32);
  }
  return str;
}

// let ans = capitalizeEnds("hii there");
// console.log(ans);

function characterFrequency(str) {
  let frequencyMap = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    if (ascii >= 97 && ascii <= 122) {
      frequencyMap[ascii - 97] += 1;
    }
  }
  for (let i = 0; i < frequencyMap.length; i++) {
    if (frequencyMap[i] > 0) {
      console.log(String.fromCharCode(i + 97) + ": " + frequencyMap[i]);
    }
  }
}

// characterFrequency("hello");

function mostWordsFound(sentences) {
  let max_words = 0;
  let word_count = 0;
  for (let sentence of sentences) {
    word_count = sentence.split(" ").length;
    max_words = word_count > max_words ? word_count : max_words;
  }
  return max_words;
}

// let ans = mostWordsFound([
//   "coding is fun",
//   "practice makes perfect",
//   "consistency is the key to success",
// ]);

// console.log(ans);

// function sortSentence(s) {
//   let words = s.split(" ");

//   let frequencymap = Array(26)
//     .fill(null)
//     .map(() => []);
//   let ans = "";

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let ascii = word.charCodeAt(0);
//     if (ascii >= 65 && ascii <= 90) ascii += 32; //converting to lowercase for comparison
//     frequencymap[ascii - 97].push(i);
//   }
//   for (let i = 0; i < frequencymap.length; i++) {
//     for (let j = 0; j < frequencymap[i].length; j++) {
//       let wordIndex = frequencymap[i][j];
//       ans += words[wordIndex] + " ";
//     }
//   }
//   return ans;
// }

// let ans = sortSentence("sorting words in a sentence");
// console.log(ans);

// console.log("apple" < "banana");

function sortSentence(s) {
  let words = s.split(" ");
  for (let i = 0; i < words.length - 1; i++) {
    let bubble = 0;

    for (let j = 1; j < words.length - i; j++) {
      if (words[bubble].toLowerCase() > words[j].toLowerCase()) {
        let temp = words[bubble];
        words[bubble] = words[j];
        words[j] = temp;
        bubble = j;
      } else {
        bubble = j;
      }
    }
  }
  return words.join(" ");
}

// let ans = sortSentence("Hello bhai kaise ho");
// console.log(ans);

function countAsterisks(s) {
  let skip = false;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if (ch == "|" && skip == false) {
      skip = true;
    } else if (ch == "|" && skip == true) {
      skip = false;
    }
    if (!skip) {
      if (ch == "*") {
        cnt++;
      }
    }
  }
  return cnt;
}

let cnt = countAsterisks("yo|uar|e**|b|e***au|tifu|l");
console.log(cnt);
