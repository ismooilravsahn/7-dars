// 1
function randomElements(arr, N) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, N);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const N = 3;
console.log(randomElements(arr, N));

//2
function uniqueWords(str) {
  const words = str.split(" ");
  const unique = [...new Set(words)];
  return unique;
}

const sentence = "apple banana apple orange banana";
console.log(uniqueWords(sentence));

// 3
function flattenArray(arr) {
  return arr.reduce(
    (flat, item) =>
      flat.concat(Array.isArray(item) ? flattenArray(item) : item),
    []
  );
}

const nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(nestedArray));

// 4
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const text = "hello world from javascript";
console.log(capitalizeWords(text));
