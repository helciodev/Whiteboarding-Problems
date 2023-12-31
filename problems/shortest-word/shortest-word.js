export default function shortestWord(sentence) {
  const sentenceArr = sentence.split(" ");
  let shortest = sentenceArr[0];

  return sentenceArr.reduce((shortestWord, currentWord) => {
    if (currentWord.length < shortestWord.length) {
      shortestWord = currentWord;
    }
    return shortestWord;
  }, shortest);
}
