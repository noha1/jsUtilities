export function LongestWord(sen) {
  // code goes here

  const clean = sen.replace(/[^\w\s]/gi, "");
  const wordsArr = clean.split(" ");
  return wordsArr.reduce((prev, current) =>
    prev.length >= current.length ? prev : current
  );
}

export function factorialize(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
