export const letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

export const letterDict: { [letter: string]: number } = letters.reduce(
  (letterMap: { [letter: string]: number }, letter: string): { [letter: string]: number } => {
    letterMap[letter] = letter.charCodeAt(0) - 65;
    return letterMap;
  },
  {},
);
