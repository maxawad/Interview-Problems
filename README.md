# Interview-Problems

Number one:

How many lines
Word Font Size


Inputs:
let string =
  "Hello, my name is Xiaolong.";
let width = 12;

Response: Interger of how many lines it takes to display
Commans and spaces must overflow

```javascript
let solution = (str, width) => {
  let rtnArr = [];
  let { words, char } = [...str].reduce(
    (prev, curr, idx, arr) => {
      if (curr == " " || curr == ",") {
        prev.words.push(curr);
        prev.char = "";
      } else if (prev.char.length) {
        prev.words[prev.words.length - 1] += curr;
        prev.char = curr;
      } else {
        prev.words.push(curr);
        prev.char = curr;
      }

      return prev;
    },
    { words: [], char: "" }
  );

  let tempLine = "";
  for (i = 0; i < words.length; i++) {
    if (tempLine.length + words[i].length >= width) {
      if (words[i] == " " || words[i] == ",") {
        tempLine += words[i];
        continue;
      }
      rtnArr.push(tempLine);
      tempLine = "";
    }
    tempLine += words[i];
  }
  if (tempLine.length) rtnArr.push(tempLine);
  [...rtnArr].map((c) => console.log(c));
  return rtnArr.length;
};

console.log(solution(string, width));
```
