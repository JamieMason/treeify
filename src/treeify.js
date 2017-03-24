const fs = require('fs');
const path = require('path');

let data = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => data += chunk);
process.stdin.on('end', () => console.log(treeify(data)));

function treeify(string) {
  return string
    .trim()
    .split('\n')
    .reduce(collectLine, []).join('\n');
}

function collectLine(output, line, i, input) {
  const depth = getDepth(line);
  const indentation = '    '.repeat(depth);
  const symbol = isLastChild(input, i) ? '└── ' : '├── ';
  output[i] = indentation + symbol + line.trim();
  output[i] = withGuides(output[i - 1] || '', output[i]);
  return output;
}

function getDepth(line) {
  const count = (line || '').match(/^ */)[0].length;
  return count > 0 ? count / 2 : 0;
}

function isLastChild(input, i) {
  const depth = getDepth(input[i]);
  for (let ii = i + 1, len = input.length; ii < len; ii++) {
    let nextDepth = getDepth(input[ii]);
    let isSibling = nextDepth === depth;
    let isAncestor = nextDepth < depth;
    if (isSibling) {
      return false;
    }
    if (isAncestor) {
      return true;
    }
  }
  return true;
}

function withGuides(previousLine, line) {
  for (let i = 0, len = previousLine.length; i < len && line[i]; i++) {
    let charAbove = previousLine[i];
    let char = line[i];
    let isBelowGuide = charAbove.search(/[├|]/) !== -1;
    let isNotSymbol = char.search(/[├|└]/) === -1;
    if (isBelowGuide && isNotSymbol) {
      line = setCharAt(i, '|', line);
    };
  }
  return line;
}

function setCharAt(i, char, string) {
  return string.substr(0, i) + char + string.substr(i + 1);
}
