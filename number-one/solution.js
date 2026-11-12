// Number one: how many lines does a string take when wrapped to a given width?
// Spaces and commas may overflow the end of a line instead of starting a new one.
const solution = (str, width) => {
  const lines = [];
  const { words } = [...str].reduce(
    (prev, curr) => {
      if (curr === " " || curr === ",") {
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

  let currentLine = "";
  for (let i = 0; i < words.length; i++) {
    if (currentLine.length + words[i].length >= width) {
      if (words[i] === " " || words[i] === ",") {
        currentLine += words[i];
        continue;
      }
      lines.push(currentLine);
      currentLine = "";
    }
    currentLine += words[i];
  }
  if (currentLine.length) lines.push(currentLine);
  lines.forEach((line) => console.log(line));
  return lines.length;
};

const string = "Hello, my name is Xiaolong.";
const width = 12;

console.log(solution(string, width));
