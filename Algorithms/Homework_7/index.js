function letterCounter(text) {
  text = text.toLowerCase().replace(/[^a-zäöüß]/g, "");
  let frequency = {};
  console.log(text);

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}

let text =
  "Dies ist ein Beispieltext für eine Häufigkeitsanalyse der Buchstaben.";
console.log(letterCounter(text));
