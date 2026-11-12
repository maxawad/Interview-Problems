# Interview-Problems

A small collection of coding interview problems, each with a worked JavaScript solution. At the moment it holds one problem, "How many lines", about wrapping text to a fixed width.

## Problems

### Number one: How many lines

Given a string and a line width (think of a font size that fits a fixed number of characters per line), work out how many lines the text takes when displayed.

- Input: a string and an integer width, for example `"Hello, my name is Xiaolong."` and `12`.
- Output: an integer, the number of lines needed.
- Rule: commas and spaces are allowed to overflow the end of a line instead of starting a new one.

The solution is in [`number-one/solution.js`](number-one/solution.js). It splits the text into words, spaces and commas, then fills lines one token at a time. It also prints each line, so for the example above you see:

```
Hello, my 
name is 
Xiaolong.
3
```

## Tech stack

Plain JavaScript (Node.js). No dependencies and no build step.

## How to run

You need Node.js installed.

```bash
node number-one/solution.js
```

To try other input, edit the `string` and `width` values at the bottom of the file.

## Status

Working, but small. It is a set of practice solutions, not an application. There is no live demo and no test suite.
